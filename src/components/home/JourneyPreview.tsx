import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, AlertCircle, Cross, Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface JourneyStep {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  number: number;
}

const JourneyPreview: React.FC = () => {
  const { t } = useLanguage();

  const steps: JourneyStep[] = [
    {
      icon: <Heart className="w-6 h-6" />,
      titleKey: 'step1.title',
      descKey: 'step1.desc',
      number: 1,
    },
    {
      icon: <Scale className="w-6 h-6" />,
      titleKey: 'step2.title',
      descKey: 'step2.desc',
      number: 2,
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      titleKey: 'step3.title',
      descKey: 'step3.desc',
      number: 3,
    },
    {
      icon: <Cross className="w-6 h-6" />,
      titleKey: 'step4.title',
      descKey: 'step4.desc',
      number: 4,
    },
    {
      icon: <Sun className="w-6 h-6" />,
      titleKey: 'step5.title',
      descKey: 'step5.desc',
      number: 5,
    },
    
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading mb-4">{t('journey.title')}</h2>
          <p className="body-text">{t('journey.subtitle')}</p>
        </div>

        {/* Journey Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Circle */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-gold flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="text-gold">{step.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/journey" className="flex items-center gap-2">
              {t('hero.cta')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneyPreview;
