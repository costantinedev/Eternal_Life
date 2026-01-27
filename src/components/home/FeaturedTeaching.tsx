import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedTeaching: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-sage-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-charcoal to-charcoal/80 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <BookOpen className="w-16 h-16 text-gold mx-auto" />
                    <p className="font-serif text-2xl text-cream italic">
                      "God is love"
                    </p>
                    <p className="text-cream/70 text-sm">— 1 John 4:8</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-gold/20 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-gold/20 rounded-full" />
              </div>
              {/* Decorative Badge */}
              <div className="absolute -top-4 -left-4 bg-gold text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">{t('featured.label')}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                {t('featured.title')}
              </h2>
              <p className="text-charcoal-light leading-relaxed text-lg">
                {t('featured.desc')}
              </p>
              
              {/* Scripture Reference */}
              <blockquote className="scripture-quote">
                “clouds and darkness are round about Him: righteousness and judgment are the foundation of His throne.” 
                <footer className="mt-2 text-sm text-muted-foreground">— Psalm 97:2.</footer>
              </blockquote>

              <Button variant="default" size="lg" asChild>
                <Link to="/teachings/character-of-god" className="flex items-center gap-2">
                  {t('featured.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeaching;
