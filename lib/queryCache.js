const cache = new Map();
const CACHE_TTL = {
  short: 5 * 60 * 1000,    // 5 minutes
  medium: 30 * 60 * 1000,  // 30 minutes  
  long: 60 * 60 * 1000,   // 1 hour
};

export async function cachedQuery(queryFn, cacheKey, ttl = 'medium') {
  const now = Date.now();
  const cached = cache.get(cacheKey);
  
  if (cached && (now - cached.timestamp) < CACHE_TTL[ttl]) {
    return cached.data;
  }
  
  const data = await queryFn();
  cache.set(cacheKey, { data, timestamp: now });
  return data;
}

export function invalidateCache(pattern = null) {
  if (!pattern) {
    cache.clear();
    return;
  }
  
  for (const key of cache.keys()) {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  }
}

export function getCacheStats() {
  const now = Date.now();
  let active = 0;
  let expired = 0;
  
  for (const { timestamp } of cache.values()) {
    if ((now - timestamp) < CACHE_TTL.medium) {
      active++;
    } else {
      expired++;
    }
  }
  
  return { total: cache.size, active, expired };
}
