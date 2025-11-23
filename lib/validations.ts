import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\d\s()+\-]*$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

