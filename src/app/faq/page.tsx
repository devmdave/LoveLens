import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "Which languages are supported?",
        answer: "LoveLens supports English, Hindi, Spanish, French, and Japanese. We are always working to add more languages in the future!"
    },
    {
        question: "How does the AI generate messages?",
        answer: "Our app uses a powerful AI model from Google called Gemini. It analyzes the image you upload, considers the persona you select (like 'friend' or 'poet'), and uses its creative abilities to generate a message in your chosen language that fits the context."
    },
    {
        question: "Is my data safe?",
        answer: "Absolutely. The images you upload are processed to generate a message and are not stored or used for any other purpose. Your privacy and data security are our top priorities."
    },
    {
        question: "Can I use this for fun or professional settings?",
        answer: "Both! LoveLens is perfect for sending a fun, personal message to a friend or family member. You can also use personas like 'mentor' or 'coach' to craft encouraging and professional messages for colleagues or team members."
    },
    {
        question: "Do I need an account to use the app?",
        answer: "No, you don't need an account! You can start generating messages right away. We wanted to make it as simple as possible to spread a little joy."
    }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <section className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-gradient-animated mb-4">
              Frequently Asked Questions
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Have questions? We've got answers. Here are some common things people ask about LoveLens.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </section>
      </main>
      <AppFooter />
    </div>
  );
}
