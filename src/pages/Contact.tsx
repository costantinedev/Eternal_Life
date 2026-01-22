import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Sun } from 'lucide-react';
import emailjs from '@emailjs/browser'; // npm install @emailjs/browser

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const form = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS Template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'costantine.dev@gmail.com',
        },
        'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
      );

      // Show success toast
      toast({
        title: language === 'en' ? 'Message Sent' : 'Ujumbe Umetumwa',
        description: language === 'en'
          ? 'Thank you for your message. We will get back to you soon!'
          : 'Asante kwa ujumbe wako. Tutawasiliana nawe hivi karibuni!',
        // variant: 'success',
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: language === 'en' ? 'Error' : 'Kosa',
        description: language === 'en'
          ? 'Something went wrong. Please try again later.'
          : 'Kuna tatizo. Tafadhali jaribu tena baadaye.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-charcoal text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              {language === 'en' ? 'Contact Us' : 'Wasiliana Nasi'}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto mb-8">
              {language === 'en'
                ? 'We would love to hear from you. Reach out for spiritual guidance, questions, or feedback.'
                : 'Tunapenda kusikia kutoka kwako. Wasiliana nasi kwa ushauri wa kiroho, maswali, au maoni.'}
            </p>
          
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contactForm" className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{language === 'en' ? 'Name' : 'Jina'}</FormLabel>
                      <FormControl>
                        <Input placeholder={language === 'en' ? 'Your name' : 'Jina lako'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{language === 'en' ? 'Email' : 'Barua Pepe'}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={language === 'en' ? 'your.email@example.com' : 'barua@example.com'} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{language === 'en' ? 'Message' : 'Ujumbe'}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={language === 'en' ? 'Share your thoughts or questions...' : 'Tuma mawazo au maswali yako...'}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  {language === 'en' ? 'Send Message' : 'Tuma Ujumbe'}
                </Button>
              </form>
            </Form>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                {language === 'en' ? 'Alternatively, you can reach us at:' : 'Vinginevyo, unaweza kutufikia hapa:'}
              </p>
              <a
                href="mailto:costantine.dev@gmail.com"
                className="text-gold hover:underline mt-2 inline-block"
              >
                costantine.dev@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
