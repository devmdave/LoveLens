import { MessageForm } from "@/components/message-form";
import { AboutSection } from "@/components/about-section";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <section id="hero" className="flex flex-col items-center justify-center my-12 pt-16 md:pt-24">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-gradient-animated mb-4">
                Welcome To LoveLens
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-8">
                Role-based, multilingual compliments powered by AI magic. Turn any photo into a reason to smile.
            </p>
            <Button size="lg" className="animated-gradient text-white font-bold" asChild>
                <Link href="#message-generator">Try it Now</Link>
            </Button>
        </section>
        <div id="message-generator" className="w-full">
            <MessageForm />
        </div>
      </main>
      <AboutSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <AppFooter />
    </div>
  );
}
