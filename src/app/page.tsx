import { MessageForm } from "@/components/message-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles } from "lucide-react";
import { AboutSection } from "@/components/about-section";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="my-12 pt-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-gradient-animated mb-4">
            Welcome to LoveLens
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Discover the perfect compliment for your loved ones by simply uploading their picture. Let LoveLens brighten their day with heartfelt, personalized words that resonate.
          </p>
        </div>
        <MessageForm />
      </main>
      <AboutSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <AppFooter />
    </div>
  );
}
