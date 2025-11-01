'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles as SparklesComponent } from './sparkles';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, useTransition } from 'react';
import html2canvas from 'html2canvas';
import { Button } from './ui/button';
import { Copy, Share2, Download, Loader2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useToast } from '@/hooks/use-toast';

interface MessageCardProps {
  message: string;
}

export function MessageCard({ message }: MessageCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, startProcessing] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(message);
    toast({ title: 'Copied to clipboard!', duration: 2000 });
  };

  const handleShare = () => {
    startProcessing(async () => {
      if (!cardRef.current) return;

      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null, // Transparent background
          useCORS: true,
          logging: false,
        });
        const dataUrl = canvas.toDataURL('image/png');
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'lovelens-message.png', { type: 'image/png' });

        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'A message from LoveLens',
            text: `"${message}"`,
            files: [file],
          });
        } else {
          // Fallback for desktop or unsupported browsers
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'lovelens-message.png';
          link.click();
        }
      } catch (error) {
        console.error('Sharing failed:', error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Could not share the image. Please try downloading instead.',
        });
      }
    });
  };

  return (
    <div
      className={cn(
        'relative opacity-0 transition-opacity duration-700 w-full max-w-md mx-auto',
        isMounted && 'opacity-100'
      )}
    >
      <div ref={cardRef} className="bg-transparent p-4">
        <SparklesComponent />
        <Card className="relative p-2 animated-gradient bg-gradient-to-br from-primary/80 via-accent/80 to-primary/80 shadow-2xl overflow-hidden">
          <div className="relative z-10 p-6 bg-background/80 backdrop-blur-lg rounded-md speech-bubble">
            <CardContent className="p-0">
              <div className='flex flex-col items-center justify-center space-y-4'>
                <p className="text-lg md:text-xl font-headline text-center text-foreground/90">
                  {message}
                </p>
                <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <p className="text-xs text-muted-foreground/80 font-medium animate-fade-in-slow">
                  ✨ Complemented by LoveLens
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleCopyToClipboard} aria-label="Copy message">
                <Copy className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleShare} 
                disabled={isProcessing}
                aria-label="Share as image"
              >
                {isProcessing ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Share2 className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share as Image</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

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
          border-top-color: hsla(var(--background-h), var(--background-s), var(--background-l), 0.8);
          border-bottom: 0;
          margin-left: -20px;
          margin-bottom: -20px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-slow {
            animation: fadeIn 1.5s ease-out 0.5s both;
        }
        .dark .speech-bubble:after {
            border-top-color: hsla(var(--background-h-dark), var(--background-s-dark), var(--background-l-dark), 0.8);
        }
      `}</style>
       <style jsx global>{`
        :root {
            --background-h: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[0]};
            --background-s: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[1]};
            --background-l: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[2]};
        }
        .dark {
            --background-h-dark: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[0]};
            --background-s-dark: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[1]};
            --background-l-dark: ${getComputedStyle(document.documentElement).getPropertyValue('--background').split(' ')[2]};
        }
       `}</style>
    </div>
  );
}
