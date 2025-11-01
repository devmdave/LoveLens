import { z } from 'zod';

export const roles = [
  // Everyday & Relatable
  "Friend",
  "Teammate",
  "Partner",
  "Cheerleader",
  "Supporter",
  "Listener",

  // Guiding & Inspiring
  "Mentor",
  "Coach",
  "Teacher",
  "Leader",
  "Guide",
  "Visionary",
  "Wise Elder",

  // Creative & Expressive
  "Poet",
  "Artist",
  "Storyteller",
  "Dreamer",
  "Innovator",
  "Creator",
  "Muse",

  // Playful & Fun
  "Comedian",
  "Playful Child",
  "Optimist",
  "Encourager",
  "Explorer",

  // Deep & Reflective
  "Philosopher",
  "Romantic",
  "Gentle Healer",
  "Guardian",
  "Seeker"
] as const;
export const languages = ['English', 'Hindi','Gujarati', 'Spanish', 'French', 'Japanese'] as const;

export const MessageFormSchema = z.object({
  imageDataUri: z
    .string({
      required_error: 'Please upload an image.',
    })
    .min(1, { message: 'Please upload an image.' })
    .startsWith('data:image/', { message: 'Invalid image format.' }),
  role: z.enum(roles, { required_error: 'Please select a role.' }),
  language: z.enum(languages, { required_error: 'Please select a language.' }),
});

export type MessageFormValues = z.infer<typeof MessageFormSchema>;
