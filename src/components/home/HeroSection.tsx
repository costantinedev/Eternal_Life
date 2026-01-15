import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-gentle-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sage/5 rounded-full blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Scripture Quote */}
          <div className="py-8">
            <blockquote className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
              <p className="font-serif text-xl md:text-2xl lg:text-3xl italic text-primary leading-relaxed">
                {t('hero.verse')}
              </p>
              <footer className="mt-4 text-cream/70 font-medium">
                — {t('hero.reference')}
              </footer>
            </blockquote>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" asChild>
              <Link to="/journey" className="flex items-center gap-2">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/know-god" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {t('hero.learnMore')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-float">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
