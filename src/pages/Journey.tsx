import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, AlertCircle, Cross, Sun, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import journeyData from '@/data/journey.json';

const Journey: React.FC = () => {
  const { t, language } = useLanguage();

  const iconMap = {
    Heart,
    Scale,
    AlertCircle,
    Cross,
    Sun,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              {t('journey.title')}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto">
              {t('journey.subtitle')}
            </p>
          </div>
        </section>

        {/* Journey Steps */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {journeyData.map((step, index) => {
                const IconComponent = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <div
                    key={step.number}
                    className={`relative ${index !== journeyData.length - 1 ? 'pb-12' : ''}`}
                  >
                    {/* Connection Line */}
                    {index !== journeyData.length - 1 && (
                      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold/20" />
                    )}

                    <div className="flex gap-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-7 h-7 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-gold">
                            {language === 'en' ? `Step ${step.number}` : `Hatua ${step.number}`}
                          </span>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-1">
                          {language === 'en' ? step.title : step.titleSw}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4">
                          {language === 'en' ? step.subtitle : step.subtitleSw}
                        </p>


                        {/* Scripture */}
                        <blockquote className="scripture-quote mb-6">
                          {step.verse}
                        </blockquote>

                        {/* Topics */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-charcoal">
                            {language === 'en' ? 'Topics in this section:' : 'Mada katika sehemu hii:'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(language === 'en' ? step.topics : step.topicsSw).map((topic, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-charcoal-light"
                              >
                                <CheckCircle className="w-3 h-3 text-sage" />
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/teachings?step=${step.number}`} className="flex items-center gap-2">
                              {language === 'en' ? 'Explore Teachings' : 'Chunguza Mafundisho'}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journey;
