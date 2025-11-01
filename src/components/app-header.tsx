"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

const LoveLensLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#icon-gradient)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="url(#icon-gradient)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="11" r="3" fill="url(#icon-gradient)" stroke="hsl(var(--background))" strokeWidth="1" />
  </svg>
);


export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
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
            <LoveLensLogo />
            <h1 className="text-xl font-bold font-headline text-gradient-animated">
              LoveLens
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                </Link>
            ))}
        </nav>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 border-t border-border/40">
            <nav className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground" onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                    </Link>
                ))}
                <ThemeToggle />
            </nav>
        </div>
      )}
    </header>
  );
}
