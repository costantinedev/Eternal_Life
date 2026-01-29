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

        {/* Animating Stars and Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          {/* Stars */}
          <circle cx="200" cy="150" r="2" fill="hsl(var(--gold))" className="animate-twinkle" />
          <circle cx="400" cy="250" r="1.5" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '1s' }} />
          <circle cx="600" cy="200" r="2.5" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '2s' }} />
          <circle cx="800" cy="300" r="1" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '3s' }} />
          <circle cx="300" cy="400" r="2" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '4s' }} />
          <circle cx="500" cy="350" r="1.5" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '5s' }} />
          <circle cx="700" cy="450" r="2.5" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '6s' }} />
          <circle cx="150" cy="500" r="1" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '7s' }} />
          <circle cx="850" cy="550" r="2" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '8s' }} />
          <circle cx="250" cy="600" r="1.5" fill="hsl(var(--gold))" className="animate-twinkle" style={{ animationDelay: '9s' }} />

          {/* Connecting Lines */}
          <line x1="200" y1="150" x2="400" y2="250" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="400" y1="250" x2="600" y2="200" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '1s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="600" y1="200" x2="800" y2="300" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '2s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="800" y1="300" x2="300" y2="400" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '3s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="300" y1="400" x2="500" y2="350" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '4s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="500" y1="350" x2="700" y2="450" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '5s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="700" y1="450" x2="150" y2="500" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '6s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="150" y1="500" x2="850" y2="550" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '7s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
          <line x1="850" y1="550" x2="250" y2="600" stroke="hsl(var(--gold))" strokeWidth="0.5" opacity="0.3" className="animate-draw-line" style={{ animationDelay: '8s', strokeDasharray: '0, 100', strokeDashoffset: '100' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
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
