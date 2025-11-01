import { Bot, Languages, ImageIcon, Share2, Group } from 'lucide-react';

const features = [
    {
        icon: Group,
        title: "Role-Based Messages",
        description: "Choose a persona like mentor, poet, or friend to get a message with the perfect tone.",
    },
    {
        icon: Languages,
        title: "Multilingual Support",
        description: "Generate messages in English, Spanish, French, Hindi, Japanese and more.",
    },
    {
        icon: ImageIcon,
        title: "Image-Based Personalization",
        description: "Our AI uses the photo to add a personal touch and make the message more relevant.",
    },
    {
        icon: Share2,
        title: "Share as a PNG",
        description: "Easily share your beautifully crafted compliments as a stylish image on any platform.",
    }
]

export function Features() {
    return (
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Inspire</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            LoveLens is packed with features designed to make sharing kindness simple and magical.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16 mt-12">
                    {features.map(feature => (
                         <div key={feature.title} className="grid gap-1 text-center">
                            <div className="flex justify-center">
                                <div className="flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
