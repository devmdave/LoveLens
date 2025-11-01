import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Magic of a Personalized Message</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                                LoveLens helps you craft the perfect message for any occasion. It’s more than just words; it’s about creating a connection, sharing a smile, and showing someone they’re special.
                            </p>
                        </div>
                        <Button asChild className="lg:w-fit">
                            <Link href="/about">
                                Learn More About Our Story
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <img
                        src="https://picsum.photos/seed/about-section/600/400"
                        data-ai-hint="people connecting"
                        alt="About"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    />
                </div>
            </div>
        </section>
    )
}
