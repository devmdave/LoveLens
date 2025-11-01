import { Bot, Languages, ImageIcon, Group } from 'lucide-react';

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
        icon: Bot,
        title: "AI-Powered Creativity",
        description: "Leverage the power of Gemini to generate creative and heartfelt messages instantly.",
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
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="grid gap-6">
                        {features.slice(0, 2).map(feature => (
                             <div key={feature.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-all group">
                                <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                 </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-6">
                        {features.slice(2, 4).map(feature => (
                             <div key={feature.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-all group">
                                <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
