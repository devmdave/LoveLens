// A Genkit flow that generates a message based on an image, role, and language.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'An image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
  role: z.string().describe('The role of the messager (e.g., mentor, poet, friend).'),
  language: z.string().describe('The language for the message (e.g., English, Hindi, Spanish).'),
});
export type MessageInput = z.infer<typeof MessageInputSchema>;

const MessageOutputSchema = z.object({
  message: z.string().describe('The generated message.'),
});
export type MessageOutput = z.infer<typeof MessageOutputSchema>;

export async function generateImageBasedMessage(
  input: MessageInput
): Promise<MessageOutput> {
  return generateImageBasedMessageFlow(input);
}

const generateMessagePrompt = ai.definePrompt({
  name: 'generateMessagePrompt',
  input: {schema: MessageInputSchema},
  output: {schema: MessageOutputSchema},
  prompt: `
    You are acting as a {{role}}.
    Look at the image provided and speak directly to the person in the image.
    Give them ONE short compliment (1–2 sentences, 10–25 words).
    The compliment should feel warm, natural, and authentic to the {{role}}'s voice.
    Output the compliment ONLY in {{language}}.
    Do not explain or add extra text — only output the compliment itself.

    Here are the details:
    - Image: {{media url=imageDataUri}}

    Message:`,
});

const generateImageBasedMessageFlow = ai.defineFlow(
  {
    name: 'generateImageBasedMessageFlow',
    inputSchema: MessageInputSchema,
    outputSchema: MessageOutputSchema,
  },
  async input => {
    const {output} = await generateMessagePrompt(input);
    return output!;
  }
);
