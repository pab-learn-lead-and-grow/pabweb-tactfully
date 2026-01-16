// lib/rateLimiter.js
// Simple in-memory rate limiter for API endpoints

class RateLimiter {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 15 * 60 * 1000; // 15 minutes
    this.maxRequests = options.maxRequests || 10; // 10 requests per window
    this.requests = new Map(); // IP -> { count, resetTime }
    
    // Clean up expired entries every minute
    setInterval(() => this.cleanup(), 60 * 1000);
  }

  // Get client IP from request
  getClientIP(request) {
    // Try various headers for real IP
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const clientIP = request.headers.get('x-client-ip');
    
    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }
    if (realIP) {
      return realIP;
    }
    if (clientIP) {
      return clientIP;
    }
    
    // Fallback to a default (in production, you'd get this from the server)
    return 'unknown';
  }

  // Check if request is allowed
  isAllowed(ip) {
    const now = Date.now();
    const clientData = this.requests.get(ip);

    if (!clientData) {
      // First request from this IP
      this.requests.set(ip, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return { allowed: true, remaining: this.maxRequests - 1 };
    }

    if (now > clientData.resetTime) {
      // Window has expired, reset counter
      this.requests.set(ip, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return { allowed: true, remaining: this.maxRequests - 1 };
    }

    if (clientData.count >= this.maxRequests) {
      // Rate limit exceeded
      const resetIn = Math.ceil((clientData.resetTime - now) / 1000);
      return { 
        allowed: false, 
        resetIn,
        error: `Too many requests. Try again in ${resetIn} seconds.`
      };
    }

    // Increment counter and allow request
    clientData.count++;
    const remaining = this.maxRequests - clientData.count;
    return { allowed: true, remaining };
  }

  // Clean up expired entries
  cleanup() {
    const now = Date.now();
    for (const [ip, data] of this.requests.entries()) {
      if (now > data.resetTime) {
        this.requests.delete(ip);
      }
    }
  }

  // Middleware function for Next.js API routes
  middleware(options = {}) {
    const limiter = new RateLimiter(options);
    
    return async function(request, context) {
      const ip = limiter.getClientIP(request);
      const result = limiter.isAllowed(ip);

      if (!result.allowed) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: result.error,
            resetIn: result.resetIn
          }), 
          { 
            status: 429,
            headers: {
              'Content-Type': 'application/json',
              'X-RateLimit-Limit': limiter.maxRequests,
              'X-RateLimit-Remaining': 0,
              'X-RateLimit-Reset': result.resetIn
            }
          }
        );
      }

      // Add rate limit headers to successful responses
      const response = await context.next();
      response.headers.set('X-RateLimit-Limit', limiter.maxRequests);
      response.headers.set('X-RateLimit-Remaining', result.remaining);
      
      return response;
    };
  }
}

// Create instances for different endpoints
export const counsellingRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5 // 5 counselling submissions per 15 minutes
});

export const newsletterRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 3 // 3 newsletter subscriptions per hour
});

export const contactRateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5 // 5 contact submissions per 15 minutes
});

export const jobRateLimiter = new RateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 3 // 3 job applications per hour
});

export default RateLimiter;