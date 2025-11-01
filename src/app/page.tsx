import { ComplimentForm } from "@/components/compliment-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-14 flex items-center">
          <div className="mr-4 flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-primary" />
            <h1 className="text-xl font-bold font-headline">
              Complimentor
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <ComplimentForm />
      </main>
    </div>
  );
}
