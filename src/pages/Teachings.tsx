import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Scale, AlertCircle, Cross, Sun, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import teachings from '@/data/teachings.json';

interface Teaching {
  id: string;
  title: string;
  titleSw: string;
  excerpt: string;
  excerptSw: string;
  category: string;
  categorySw: string;
  step: number;
  readTime: string;
}

const Teachings: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'en' ? 'All Teachings' : 'Mafundisho Yote', icon: BookOpen },
    { id: 'character', label: language === 'en' ? "God's Character" : 'Tabia ya Mungu', icon: Heart },
    { id: 'law', label: language === 'en' ? "God's Law" : 'Sheria ya Mungu', icon: Scale },
    { id: 'sin', label: language === 'en' ? 'Understanding Sin' : 'Kuelewa Dhambi', icon: AlertCircle },
    { id: 'redemption', label: language === 'en' ? 'Redemption in Christ' : 'Ukombozi katika Kristo', icon: Cross },
    { id: 'eternal-life', label: language === 'en' ? 'Living Eternal Life' : 'Kuishi Uzima wa Milele', icon: Sun },
  ];



  const filteredTeachings = selectedCategory === 'all'
    ? teachings
    : teachings.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              {language === 'en' ? 'Teachings' : 'Mafundisho'}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Biblical teachings organized to guide you step by step into a deeper knowledge of God.'
                : 'Mafundisho ya Biblia yaliyopangwa kukuongoza hatua kwa hatua katika ujuzi wa kina wa Mungu.'}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-cream border-b border-border sticky top-16 md:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat.id
                        ? 'bg-gold text-primary-foreground shadow-md'
                        : 'bg-muted text-charcoal-light hover:bg-muted/80'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Teachings Grid */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredTeachings.map((teaching) => (
                <article
                  key={teaching.id}
                  className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="p-6 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                        {language === 'en' 
                          ? categories.find(c => c.id === teaching.category)?.label 
                          : teaching.categorySw}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {teaching.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-charcoal mb-3 line-clamp-2">
                      {language === 'en' ? teaching.title : teaching.titleSw}
                    </h3>
                    
                    <p className="text-charcoal-light text-sm leading-relaxed line-clamp-3">
                      {language === 'en' ? teaching.excerpt : teaching.excerptSw}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={`/teachings/${teaching.id}`} className="flex items-center justify-center gap-2">
                        {language === 'en' ? 'Read Teaching' : 'Soma Fundisho'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {filteredTeachings.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'No teachings found in this category yet.' 
                    : 'Hakuna mafundisho yaliyopatikana katika kategoria hii bado.'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Teachings;
