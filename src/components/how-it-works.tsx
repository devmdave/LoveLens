import { UploadCloud, Users, Languages, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: '1. Upload an Image',
    description: 'Choose a photo that captures a special moment or feeling.',
  },
  {
    icon: Users,
    title: '2. Select a Role',
    description: 'Pick a persona like "friend" or "poet" to set the tone.',
  },
  {
    icon: Languages,
    title: '3. Select a Language',
    description: 'Choose from multiple languages for your message.',
  },
  {
    icon: Sparkles,
    title: '4. Get Your Message',
    description: 'Our AI magically crafts a unique, heartfelt message for you.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Simple Path to a Perfect Message</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these four easy steps to generate a personalized message that will make anyone's day.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16 mt-12">
          {steps.map((step) => (
            <div key={step.title} className="grid gap-1 text-center">
                <div className='flex justify-center'>
                    <div className="flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                        <step.icon className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
