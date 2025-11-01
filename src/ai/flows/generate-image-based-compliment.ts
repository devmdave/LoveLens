// A Genkit flow that generates a compliment based on an image, role, and language.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ComplimentInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'An image as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
  role: z.string().describe('The role of the complimentor (e.g., mentor, poet, friend).'),
  language: z.string().describe('The language for the compliment (e.g., English, Hindi, Spanish).'),
});
export type ComplimentInput = z.infer<typeof ComplimentInputSchema>;

const ComplimentOutputSchema = z.object({
  compliment: z.string().describe('The generated compliment.'),
});
export type ComplimentOutput = z.infer<typeof ComplimentOutputSchema>;

export async function generateImageBasedCompliment(
  input: ComplimentInput
): Promise<ComplimentOutput> {
  return generateImageBasedComplimentFlow(input);
}

const generateComplimentPrompt = ai.definePrompt({
  name: 'generateComplimentPrompt',
  input: {schema: ComplimentInputSchema},
  output: {schema: ComplimentOutputSchema},
  prompt: `You are a helpful AI assistant that generates compliments based on an image, a specified role, and a language.

  The user will provide an image, a role, and a language. Your task is to generate a single compliment that is relevant to the image, appropriate for the role, and written in the specified language.

  Here are the details:
  - Image: {{media url=imageDataUri}}
  - Role: {{role}}
  - Language: {{language}}

  Generate a compliment that incorporates information from the image into the compliment, based on the role and language, if relevant. The model should act as a tool to decide when, if, or how to incorporate information from the image into the compliment. Return only the compliment. Do not include any extraneous information.

  Compliment:`, // Corrected prompt here
});

const generateImageBasedComplimentFlow = ai.defineFlow(
  {
    name: 'generateImageBasedComplimentFlow',
    inputSchema: ComplimentInputSchema,
    outputSchema: ComplimentOutputSchema,
  },
  async input => {
    const {output} = await generateComplimentPrompt(input);
    return output!;
  }
);
