import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 flex items-center justify-center">
        <section className="container mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-gradient-animated mb-4">
              Get In Touch
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
