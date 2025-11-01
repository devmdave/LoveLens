
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  <div className="relative w-8 h-8">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>
      
      {/* Sparkle */}
      <path 
        d="M85 15 L88 22 L95 25 L88 28 L85 35 L82 28 L75 25 L82 22 Z"
        fill="url(#logo-gradient)" 
        transform="rotate(15 85 25)"
        style={{ filter: 'url(#glow)', opacity: 0.8 }}
      />
      
      {/* Heart/Lens Shape */}
      <path
        d="M50 87.3C27.5 70.9 15 56.2 15 40C15 26.2 26.2 15 40 15C48.3 15 56.1 19.3 60.8 25.8C59.7 26.3 58.6 26.9 57.5 27.5C53.8 22.5 47.4 19 40 19C28.4 19 19 28.4 19 40C19 54.3 30.2 67.3 50 83.2C69.8 67.3 81 54.3 81 40C81 33.4 77.9 27.6 72.8 23.9C74.6 21.6 76.8 19.8 79.2 18.5C82.8 20.8 85 25.4 85 30.6C85 32.6 84.6 34.6 83.9 36.4C83.8 36.7 83.7 37 83.6 37.3L85 40C85 56.2 72.5 70.9 50 87.3Z"
        fill="url(#logo-gradient)"
      />
       {/* Inner circle of the lens */}
      <circle cx="50" cy="40" r="16" fill="transparent" stroke="url(#logo-gradient)" strokeWidth="2.5" opacity="0.7"/>
    </svg>
  </div>
);


export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container justify-center text-center h-14 flex items-center">
        <div className="w-[30vw] mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <LoveLensLogo />
            <h1 className="text-2xl font-bold font-headline text-gradient-animated">
              LoveLens
            </h1>
          </Link>
        </div>
        
        <nav className="w-[40vw] hidden md:flex flex-1 text-ce items-center justify-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                </Link>
            ))}
        </nav>

        <div className="w-[30vw] flex flex-1 items-center justify-end">
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
