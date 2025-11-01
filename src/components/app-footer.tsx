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
    { href: "#features", label: "Features" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
]

export function AppFooter() {
    return (
        <footer className="w-full py-8 bg-background/50 border-t">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-headline text-gradient-animated">
                        LOVELENS
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Let Us Brighten your day with words
                    </p>
                </div>
                <div className="grid grid-cols-2 md:col-span-2 gap-8">
                    <div>
                        <h3 className="font-semibold mb-2">Navigation</h3>
                        <ul className="space-y-2">
                            {footerLinks.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Connect with us</h3>
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
                </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>
                Developed by Madhav Dave
              </p>
            </div>
          </div>
        </footer>
    );
}
