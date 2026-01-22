import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Users, Target, Sun } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  // Steps aligned with your blog's 5 topics
  const steps = [
    {
      icon: BookOpen,
      title: language === 'en' ? 'Why Was Sin Permitted?' : 'Kwa Nini Dhambi Iliruhusiwa?',
      description: language === 'en'
        ? 'Understanding God’s character, freedom, and the origin of evil.'
        : 'Kuelewa tabia ya Mungu, uhuru wa kuchagua, na asili ya uovu.'
    },
    {
      icon: Heart,
      title: language === 'en' ? 'The Plan of Salvation' : 'Mpango wa Wokovu',
      description: language === 'en'
        ? 'God’s eternal plan to save humanity through Jesus Christ.'
        : 'Mpango wa milele wa Mungu wa kumwokoa mwanadamu kupitia Yesu Kristo.'
    },
    {
      icon: Sun,
      title: language === 'en' ? 'The Three Angels’ Messages' : 'Ujumbe wa Malaika Watatu',
      description: language === 'en'
        ? 'Heaven’s final message calling the world back to God.'
        : 'Ujumbe wa mwisho wa mbinguni unaouita ulimwengu urejee kwa Mungu.'
    },
    {
      icon: Users,
      title: language === 'en' ? 'As It Was in the Days of Noah' : 'Kama Ilivyokuwa Siku za Nuhu',
      description: language === 'en'
        ? 'A warning from history repeating in the last days.'
        : 'Onyo kutoka historia inayojirudia katika siku za mwisho.'
    },
    {
      icon: Target,
      title: language === 'en' ? 'The New Heaven & New Earth' : 'Mbingu Mpya na Nchi Mpya',
      description: language === 'en'
        ? 'God’s promise of eternal life in a restored world.'
        : 'Ahadi ya Mungu ya uzima wa milele katika ulimwengu uliorejeshwa.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              {language === 'en' ? 'About This Ministry' : 'Kuhusu Huduma Hii'}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'A Christ-centered ministry dedicated to guiding believers through the journey of knowing God personally and experiencing eternal life.'
                : 'Huduma inayomlenga Kristo, iliyojitolea kuongoza waumini katika safari ya kumjua Mungu kibinafsi na kupata uzima wa milele.'}
            </p>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
            <h2 className="section-heading mb-8">
              {language === 'en' ? 'Our Foundation' : 'Msingi Wetu'}
            </h2>

            <blockquote className="font-serif text-2xl md:text-3xl italic text-charcoal mb-4 leading-relaxed">
              {language === 'en'
                ? '"Now this is eternal life: that they know You, the only true God, and Jesus Christ, whom You have sent."'
                : '"Huu ndio uzima wa milele: kumjua Wewe Mungu wa kweli peke yako, na Yesu Kristo uliyemtuma."'}
            </blockquote>
            <p className="text-gold font-semibold mb-8">— John 17:3</p>

            <p className="text-charcoal-light mb-6">
              {language === 'en'
                ? 'Jesus defines eternal life as a personal, transformational relationship with God, not just intellectual knowledge.'
                : 'Yesu anafafanua uzima wa milele kama uhusiano wa kibinafsi, unaobadilisha, na Mungu, si maarifa ya kiakili tu.'}
            </p>
            <p className="text-charcoal-light">
              {language === 'en'
                ? 'Our mission is to guide believers step by step through understanding God’s character, His law, the nature of sin, His plan of salvation, and the promise of a restored creation.'
                : 'Misheni yetu ni kuongoza waumini hatua kwa hatua kuelewa tabia ya Mungu, sheria yake, asili ya dhambi, mpango wa wokovu, na ahadi ya uumbaji uliorejeshwa.'}
            </p>
          </div>
        </section>

        {/* Steps / Featured Section */}
        <section className="py-16 bg-sage-light">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">
              {language === 'en' ? 'Our Teaching Steps' : 'Hatua Zetu za Mafundisho'}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-md border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                          {step.title}
                        </h3>
                        <p className="text-charcoal-light leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              {language === 'en' ? 'Begin Your Journey' : 'Anza Safari Yako'}
            </h2>
            <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Start this transformational journey of knowing God personally and experiencing eternal life.'
                : 'Anza safari hii ya kubadilika ya kumjua Mungu kibinafsi na kupata uzima wa milele.'}
            </p>
            <Button variant="hero" asChild>
              <Link to="/journey" className="flex items-center gap-2">
                {language === 'en' ? 'Start the Journey' : 'Anza Safari'}
                <Sun className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
