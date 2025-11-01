import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, PenTool } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <section className="container mx-auto py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-gradient-animated mb-4">
            About LoveLens
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We believe a few kind words can change someone's entire day. LoveLens was born from a simple idea: to make it easy and fun to share personalized, meaningful messages that show you care.
          </p>
        </section>

        <section className="bg-background/50">
          <div className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">The Story Behind the Sparkle</h2>
              <p className="text-muted-foreground">
                In a fast-paced world, we sometimes forget the power of a simple compliment. A thoughtful message can build bridges, mend hearts, and spark joy. We wanted to create a tool that wasn't just a message generator, but a partner in creativity—one that helps you find the perfect words for any person, any occasion, and any language.
              </p>
              <p className="text-muted-foreground">
                Using the magic of AI, LoveLens analyzes an image to capture a mood or a detail you might have missed, and combines it with the persona you choose to craft something truly special. It’s your secret weapon for spreading kindness.
              </p>
            </div>
            <div className="flex justify-center">
                <img src="https://picsum.photos/seed/about/500/500" data-ai-hint="abstract kindness" alt="Abstract art representing connection" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 md:py-24">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Spread Joy</h3>
                    <p className="text-muted-foreground">To empower everyone to share more love and positivity in the world, one message at a time.</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Inspire Creativity</h3>
                    <p className="text-muted-foreground">To provide a tool that sparks creativity and helps you express yourself in new and beautiful ways.</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <PenTool className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Make it Magical</h3>
                    <p className="text-muted-foreground">To blend technology and heart, creating a delightful experience that feels like magic.</p>
                </div>
            </div>
        </section>

        <section className="bg-background/50">
          <div className="container mx-auto py-16 md:py-24 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create a Smile?</h2>
            <p className="text-muted-foreground mb-8">
              Try LoveLens today and see how easy it is to make someone's day.
            </p>
            <Button size="lg" className="animated-gradient text-white font-bold" asChild>
              <Link href="/">Get Started</Link>
            </Button>
          </div>
        </section>

      </main>
      <AppFooter />
    </div>
  );
}
