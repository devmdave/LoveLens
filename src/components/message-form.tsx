'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { languages, roles, MessageFormSchema, type MessageFormValues } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';
import { generateMessageAction } from '@/app/actions';
import { Loader2, Send, Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ImageUploader } from './image-uploader';
import { MessageCard } from './message-card';
import { cn } from '@/lib/utils';

export function MessageForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ message?: string; error?: string } | null>(null);
  const { toast } = useToast();

  const form = useForm<MessageFormValues>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      imageDataUri: '',
      role: undefined,
      language: undefined,
    },
  });

  const onSubmit = (values: MessageFormValues) => {
    setResult(null);
    startTransition(async () => {
      const response = await generateMessageAction(values);
      if (response.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: response.error,
        });
      }
      setResult(response);
    });
  };

  const hasGeneratedMessage = !!result?.message;

  return (
    <div className="w-full max-w-2xl space-y-8">
      <Card className="w-full bg-card/60 backdrop-blur-sm border-border/30 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Craft a Perfect Message</CardTitle>
          <CardDescription>Turn a cherished photo into a heartfelt message. Just upload an image, select a persona, and let the magic happen.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="imageDataUri"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUploader onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Persona</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role} className="capitalize">
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a language..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang}>
                              {lang}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" disabled={isPending} className="w-full text-white font-bold animated-gradient">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : hasGeneratedMessage ? (
                  <Wand2 className="mr-2 h-4 w-4" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {hasGeneratedMessage ? 'Generate Another' : 'Generate Message'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className={cn("transition-opacity duration-500", result?.message ? "opacity-100" : "opacity-0")}>
        {result?.message && <MessageCard message={result.message} />}
      </div>
    </div>
  );
}