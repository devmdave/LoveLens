"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { useState } from "react";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/#how-it-works", label: "How It Works"},
    { href: "/#features", label: "Features" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

const LoveLensLogo = () => (
    <div className="relative w-7 h-7">
        <Sparkles className="absolute inset-0 w-full h-full text-gradient-animated" fill="url(#icon-gradient)" />
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
    </div>
);


export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
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
