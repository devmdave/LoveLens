
'use server';

import { generateImageBasedMessage } from '@/ai/flows/generate-image-based-message';
import type { MessageInput } from '@/ai/flows/generate-image-based-message';
import { MessageFormSchema } from '@/lib/definitions';

export async function generateMessageAction(
  data: MessageInput
): Promise<{ message?: string; error?: string }> {
  const validatedFields = MessageFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      error: firstError || 'Invalid input.',
    };
  }

  try {
    const result = await generateImageBasedMessage(validatedFields.data);
    if (result.message) {
      return { message: result.message };
    }
    return { error: 'Failed to generate message. Please try again.' };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `An unexpected error occurred: ${errorMessage}` };
  }
}
