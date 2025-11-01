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
  prompt: `You are a helpful AI assistant that generates messages based on an image, a specified role, and a language.

  The user will provide an image, a role, and a language. Your task is to generate a single message that is relevant to the image, appropriate for the role, and written in the specified language.

  Here are the details:
  - Image: {{media url=imageDataUri}}
  - Role: {{role}}
  - Language: {{language}}

  Generate a message that incorporates information from the image into the message, based on the role and language, if relevant. The model should act as a tool to decide when, if, or how to incorporate information from the image into the message. Return only the message. Do not include any extraneous information.

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
