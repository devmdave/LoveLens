
import { MessageForm } from "@/components/message-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-14 flex items-center">
          <div className="mr-4 flex items-center">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="icon-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ee7752" />
                  <stop offset="33%" stopColor="#e73c7e" />
                  <stop offset="66%" stopColor="#23d5ab" />
                  <stop offset="100%" stopColor="#23a6d5" />
                </linearGradient>
              </defs>
            </svg>
            <Sparkles
              className="h-6 w-6 mr-2"
              style={{ stroke: "url(#icon-gradient)" }}
            />
            <h1 className="text-xl font-bold font-headline text-gradient-animated">
              LoveLens
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-gradient-animated mb-4">
            Welcome to LoveLens
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Discover the perfect compliment for your loved ones by simply uploading their picture. Let LoveLens brighten their day with heartfelt, personalized words that resonate.
          </p>
        </div>
        <MessageForm />
      </main>
      <footer className="w-full py-6">
        <div className="container flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-2xl font-bold font-headline text-gradient-animated">
            LOVELENS
          </h2>
          <p className="text-sm text-muted-foreground">
            Developed by Madhav Dave
          </p>
        </div>
      </footer>
    </div>
  );
}
