// lib/security.js
import DOMPurify from 'isomorphic-dompurify';

// Input validation and sanitization utilities
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  // Remove HTML tags and dangerous characters
  return DOMPurify.sanitize(input.trim(), {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

// Email validation with regex
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation (supports both 10-digit and international formats)
export const validatePhone = (phone) => {
  // Remove all non-digit characters for validation
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Accept 10-digit numbers (Indian format) or international numbers (10-15 digits)
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

// Name validation (letters, spaces, hyphens only)
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
  return nameRegex.test(name) && name.trim().length >= 2;
};

// Generic text validation
export const validateText = (text, minLength = 1, maxLength = 1000) => {
  return typeof text === 'string' && 
         text.trim().length >= minLength && 
         text.trim().length <= maxLength;
};

// Sanitize form data object
export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  Object.keys(formData).forEach(key => {
    if (formData[key] !== null && formData[key] !== undefined) {
      sanitized[key] = sanitizeInput(formData[key]);
    }
  });
  
  return sanitized;
};

// Validate counselling form data
export const validateCounsellingForm = (data) => {
  const errors = [];
  
  // Name validation
  if (!data.name || !validateName(data.name)) {
    errors.push('Valid name is required');
  }
  
  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  // Phone validation
  if (!data.phone || !validatePhone(data.phone)) {
    errors.push('Valid phone number is required');
  }
  
  // University validation
  if (!data.university || !validateText(data.university, 2, 100)) {
    errors.push('University name is required');
  }
  
  // Course validation
  if (!data.course || !validateText(data.course, 2, 100)) {
    errors.push('Course name is required');
  }
  
  // Message validation (optional)
  if (data.message && !validateText(data.message, 0, 1000)) {
    errors.push('Message is too long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Validate contact form data
export const validateContactForm = (data) => {
  const errors = [];
  
  // First name validation
  if (!data.firstName || !validateName(data.firstName)) {
    errors.push('Valid first name is required');
  }
  
  // Last name validation
  if (!data.lastName || !validateName(data.lastName)) {
    errors.push('Valid last name is required');
  }
  
  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  // Phone validation
  if (!data.phone || !validatePhone(data.phone)) {
    errors.push('Valid phone number is required');
  }
  
  // Message validation (optional)
  if (data.message && !validateText(data.message, 0, 1000)) {
    errors.push('Message is too long');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Validate job application form data
export const validateJobForm = (data) => {
  const errors = [];
  
  // Name validation
  if (!data.name || !validateName(data.name)) {
    errors.push('Valid name is required');
  }
  
  // Email validation
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  // Phone validation
  if (!data.phone || !validatePhone(data.phone)) {
    errors.push('Valid phone number is required');
  }
  
  // Position validation
  if (!data.position || !validateText(data.position, 2, 100)) {
    errors.push('Position is required');
  }
  
  // Experience validation
  if (!data.experience || !validateText(data.experience, 1, 50)) {
    errors.push('Experience level is required');
  }
  
  // Resume URL validation (optional)
  if (data.resumeUrl && !validateText(data.resumeUrl, 10, 500)) {
    errors.push('Invalid resume URL');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};