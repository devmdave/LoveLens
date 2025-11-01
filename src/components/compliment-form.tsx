'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { languages, roles, ComplimentFormSchema, type ComplimentFormValues } from '@/lib/definitions';
import { useToast } from '@/hooks/use-toast';
import { generateComplimentAction } from '@/app/actions';
import { Loader2, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ImageUploader } from './image-uploader';
import { ComplimentCard } from './compliment-card';
import { cn } from '@/lib/utils';

export function ComplimentForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ compliment?: string; error?: string } | null>(null);
  const { toast } = useToast();

  const form = useForm<ComplimentFormValues>({
    resolver: zodResolver(ComplimentFormSchema),
    defaultValues: {
      imageDataUri: '',
      role: undefined,
      language: undefined,
    },
  });

  const onSubmit = (values: ComplimentFormValues) => {
    setResult(null);
    startTransition(async () => {
      const response = await generateComplimentAction(values);
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

  return (
    <div className="w-full max-w-2xl space-y-8">
      <Card className="w-full bg-card/60 backdrop-blur-sm border-border/30 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create a Compliment</CardTitle>
          <CardDescription>Upload an image and select a persona to generate a unique compliment.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="imageDataUri"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
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

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                Generate Compliment
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className={cn("transition-opacity duration-500", result?.compliment ? "opacity-100" : "opacity-0")}>
        {result?.compliment && <ComplimentCard compliment={result.compliment} />}
      </div>
    </div>
  );
}
