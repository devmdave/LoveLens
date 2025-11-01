'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from './sparkles';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface MessageCardProps {
  message: string;
}

export function MessageCard({ message }: MessageCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount the component to trigger fade-in animation
    setIsMounted(true);
  }, []);

  return (
    <div
      className={cn(
        'relative opacity-0 transition-opacity duration-700',
        isMounted && 'opacity-100'
      )}
    >
      <Sparkles />
      <Card className="relative p-2 animated-gradient bg-gradient-to-br from-primary/80 via-accent/80 to-primary/80 shadow-2xl overflow-hidden">
        <div className="relative z-10 p-6 bg-background/80 backdrop-blur-lg rounded-md speech-bubble">
          <CardContent className="p-0">
            <p className="text-lg md:text-xl font-headline text-center text-foreground/90">
              {message}
            </p>
          </CardContent>
        </div>
      </Card>
      <style jsx>{`
        .speech-bubble {
          position: relative;
        }
        .speech-bubble:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-top-color: hsl(var(--background) / 0.8);
          border-bottom: 0;
          margin-left: -20px;
          margin-bottom: -20px;
        }
      `}</style>
    </div>
  );
}
