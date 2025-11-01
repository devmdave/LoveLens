'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    role: 'Friend',
    message: 'Just saw your picture, and it totally made my day! Your smile is as bright as ever. Keep shining!',
    avatar: 'AV',
    avatarImage: 'https://picsum.photos/seed/avatar1/100/100',
    avatarHint: 'smiling person'
  },
  {
    role: 'Poet',
    message: 'In fields of gold, a spirit bright, your gentle gaze, a calming light. A captured moment, pure and true, a lovely, wondrous view of you.',
    avatar: 'JB',
    avatarImage: 'https://picsum.photos/seed/avatar2/100/100',
    avatarHint: 'thoughtful person'
  },
  {
    role: 'Mentor',
    message: 'This photo shows your incredible focus and determination. Keep channeling that energy. You are on the right path to achieving great things.',
    avatar: 'MS',
    avatarImage: 'https://picsum.photos/seed/avatar3/100/100',
    avatarHint: 'wise person'
  },
  {
    role: 'Coach',
    message: 'Look at that winning attitude! This is the energy we need. Bring this fire to the next game, and we\'ll be unstoppable. Great job!',
    avatar: 'CD',
    avatarImage: 'https://picsum.photos/seed/avatar4/100/100',
    avatarHint: 'energetic person'
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Messages from the Heart</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what kind of magic LoveLens can create. Here are some examples of messages crafted for different roles.
            </p>
          </div>
        </div>
        <Carousel 
            opts={{ loop: true }}
            plugins={[Autoplay({delay: 3000})]}
            className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className='bg-card/60 h-full'>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                       <Avatar>
                         <AvatarImage src={testimonial.avatarImage} data-ai-hint={testimonial.avatarHint} alt={`Avatar for ${testimonial.role}`} />
                         <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                       </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.role}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">"{testimonial.message}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
