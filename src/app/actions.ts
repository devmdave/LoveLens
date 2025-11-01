
'use server';

import { generateImageBasedCompliment } from '@/ai/flows/generate-image-based-compliment';
import type { ComplimentInput } from '@/ai/flows/generate-image-based-compliment';
import { ComplimentFormSchema } from '@/lib/definitions';

export async function generateComplimentAction(
  data: ComplimentInput
): Promise<{ compliment?: string; error?: string }> {
  const validatedFields = ComplimentFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      error: firstError || 'Invalid input.',
    };
  }

  try {
    const result = await generateImageBasedCompliment(validatedFields.data);
    if (result.compliment) {
      return { compliment: result.compliment };
    }
    return { error: 'Failed to generate compliment. Please try again.' };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `An unexpected error occurred: ${errorMessage}` };
  }
}
