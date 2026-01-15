import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-4">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream">
            {t('cta.title')}
          </h2>

          {/* Description */}
          <p className="text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
            {t('cta.desc')}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/journey" className="flex items-center gap-2">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Supporting Scripture */}
          <div className="pt-8">
            <p className="font-serif text-gold-light italic text-lg">
              "Come to me, all who labor and are heavy laden, and I will give you rest."
            </p>
            <p className="text-cream/50 text-sm mt-2">— Matthew 11:28</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
