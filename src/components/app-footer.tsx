import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
]

const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

export function AppFooter() {
    return (
        <footer className="w-full py-8 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between items-center gap-6">
                    <div className="text-center max-md:text-left">
                        <Link href="/" className="inline-block">
                             <h2 className="text-4xl tracking-wider font-bold font-headline text-gradient-animated">
                                LoveLens
                            </h2>
                        </Link>
                    </div>
                    
                    <div className="flex flex-col items-center gap-4">
                        <nav className="flex gap-4 md:gap-6">
                            {footerLinks.map(link => (
                                <li key={link.href} className="list-none">
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </nav>
                        <div className="flex space-x-2">
                            {socialLinks.map(link => (
                                <Button key={link.label} variant="ghost" size="icon" asChild>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                                        <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-transform hover:scale-110" />
                                        <span className="sr-only">{link.label}</span>
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                     <div className="text-center max-md:text-right">
                        <p className="text-sm text-muted-foreground">
                            Made with ❤️ by Madhav Dave
                        </p>
                    </div>
                    <div className="text-center max-md:text-right">
                        <p className="text-sm text-muted-foreground">
                            &copy; 2025 LoveLens. All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
                    <p>
                        <span className="inline-block animate-subtle-sparkle">✨</span> Generated with kindness · Powered by LoveLens
                    </p>
                </div>
            </div>
        </footer>
    );
}
