import { z } from 'zod';

export const roles = ['mentor', 'poet', 'friend', 'coach', 'teammate'] as const;
export const languages = ['English', 'Hindi', 'Spanish', 'French', 'Japanese'] as const;

export const ComplimentFormSchema = z.object({
  imageDataUri: z
    .string({
      required_error: 'Please upload an image.',
    })
    .min(1, { message: 'Please upload an image.' })
    .startsWith('data:image/', { message: 'Invalid image format.' }),
  role: z.enum(roles, { required_error: 'Please select a role.' }),
  language: z.enum(languages, { required_error: 'Please select a language.' }),
});

export type ComplimentFormValues = z.infer<typeof ComplimentFormSchema>;
