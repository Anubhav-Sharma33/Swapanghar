import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
    .max(50, "Name must be at most 50 characters long"),

  email: z
    .string()
    .email("Invalid email format")
    .min(1, "Email is required")
    .max(100, "Email must be at most 100 characters long"),

  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\d{10}$/, "Mobile number is not correct"),

  acceptTerms: z
    .boolean()
    .refine(val => val === true, "You must accept the terms"),
});
