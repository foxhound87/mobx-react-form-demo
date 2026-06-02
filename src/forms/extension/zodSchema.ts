import { z } from 'zod';

/**
 * Zod schema for form validation.
 * Validates the entire form's flatMapValues against this schema.
 */
export const zodSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(20),
  email: z.string().email('Invalid email address'),
  age: z.coerce.number().min(18, 'Must be at least 18').max(120),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  acceptTerms: z.literal(true, { message: 'You must accept the terms' }),
});
