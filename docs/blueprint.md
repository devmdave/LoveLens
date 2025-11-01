# **App Name**: Complimentor ✨

## Core Features:

- Image Upload: Allow users to upload an image via drag-and-drop or file picker.
- Role Selection: Dropdown menu for selecting a role (mentor, poet, friend, coach, teammate).
- Language Selection: Dropdown menu for selecting the language for the compliment (English, Hindi, Spanish, French, Japanese).
- Compliment Generation: Generate a role-based, multilingual compliment using the Google Gemini API via a Firebase Function.  The function should use the prompt plus the image in generating the compliment. The model should act as a tool to decide when, if, or how to incorporate information from the image into the compliment.
- Compliment Display: Display the generated compliment in a styled speech-bubble card with animated gradient background and fade-in animation.
- Data logging: Store user requests (role, language, timestamp) in Firestore for analytics.
- Dark/Light Mode: Toggle for switching between dark and light mode.

## Style Guidelines:

- Primary color: Soft lavender (#E6E6FA) to evoke feelings of calm and creativity.
- Background color: Light gray (#F5F5F5) for a clean and modern feel.
- Accent color: Muted blue (#A9B2C3) to complement the primary color and provide a subtle contrast.
- Body and headline font: 'PT Sans', a humanist sans-serif for headlines and body text
- Use minimalist, elegant icons for a modern aesthetic.
- Centered card layout with glassmorphism (blurred, semi-transparent panels) to provide a modern, clean aesthetic.
- Smooth animations on hover and button clicks to enhance user engagement. A random 'sparkle' animation will also appear when a compliment appears.