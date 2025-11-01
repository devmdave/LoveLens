import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [googleAI({apiKey: 'AIzaSyBsP7J1SdZCeEayvvlRn1DBcuAOQC6QWU0'})],
  model: 'googleai/gemini-2.5-flash',
});
