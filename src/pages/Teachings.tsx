import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Scale, AlertCircle, Cross, Sun, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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

  const teachings: Teaching[] = [
    {
      id: 'character-of-god',
      title: 'The Character of God: Foundation of All Truth',
      titleSw: 'Tabia ya Mungu: Msingi wa Ukweli Wote',
      excerpt: 'Before we can understand sin, salvation, or eternal life, we must first understand who God is. His character is the foundation upon which all biblical truth rests.',
      excerptSw: 'Kabla ya kuelewa dhambi, wokovu, au uzima wa milele, lazima kwanza tuelewa Mungu ni nani. Tabia yake ndiyo msingi ambao ukweli wote wa Biblia unajengwa.',
      category: 'character',
      categorySw: 'Tabia ya Mungu',
      step: 1,
      readTime: '12 min',
    },
    {
      id: 'god-is-love',
      title: 'God is Love: The Essence of His Being',
      titleSw: 'Mungu ni Upendo: Kiini cha Uwepo Wake',
      excerpt: 'Love is not merely something God does—it is who He is. Understanding this truth transforms our relationship with Him.',
      excerptSw: 'Upendo si jambo tu Mungu anafanya—ni yeye ni nani. Kuelewa ukweli huu kunabadilisha uhusiano wetu naye.',
      category: 'character',
      categorySw: 'Tabia ya Mungu',
      step: 1,
      readTime: '10 min',
    },
    {
      id: 'law-of-love',
      title: 'The Law of Love: Understanding God\'s Commandments',
      titleSw: 'Sheria ya Upendo: Kuelewa Amri za Mungu',
      excerpt: 'God\'s law is not arbitrary rules but a reflection of His character. When we understand this, obedience becomes a response of love.',
      excerptSw: 'Sheria ya Mungu si sheria za kiholela bali ni onyesho la tabia yake. Tunapoelewa hili, utii unakuwa jibu la upendo.',
      category: 'law',
      categorySw: 'Sheria ya Mungu',
      step: 2,
      readTime: '15 min',
    },
    {
      id: 'what-is-sin',
      title: 'What is Sin? Understanding Our Separation from God',
      titleSw: 'Dhambi ni Nini? Kuelewa Kutengana Kwetu na Mungu',
      excerpt: 'Sin is the transgression of God\'s law—a departure from His character of love. Understanding sin helps us appreciate the gift of salvation.',
      excerptSw: 'Dhambi ni kuvunja sheria ya Mungu—kuondoka kutoka tabia yake ya upendo. Kuelewa dhambi kunatusaidia kuthamini zawadi ya wokovu.',
      category: 'sin',
      categorySw: 'Kuelewa Dhambi',
      step: 3,
      readTime: '14 min',
    },
    {
      id: 'the-cross-explained',
      title: 'The Cross: Where Justice and Mercy Meet',
      titleSw: 'Msalaba: Mahali Ambapo Haki na Rehema Zinakutana',
      excerpt: 'At the cross, we see the fullest revelation of God\'s character—His justice that cannot overlook sin, and His mercy that provides salvation.',
      excerptSw: 'Msalabani, tunaona ufunuo kamili wa tabia ya Mungu—haki yake isiyoweza kupuuza dhambi, na rehema yake inayotoa wokovu.',
      category: 'redemption',
      categorySw: 'Ukombozi katika Kristo',
      step: 4,
      readTime: '18 min',
    },
    {
      id: 'walking-with-god',
      title: 'Walking with God: Eternal Life Begins Now',
      titleSw: 'Kutembea na Mungu: Uzima wa Milele Unaanza Sasa',
      excerpt: 'Eternal life is not just a future hope but a present reality. It is knowing God daily, growing in His likeness, and experiencing His presence.',
      excerptSw: 'Uzima wa milele si tumaini la baadaye tu bali ni ukweli wa sasa. Ni kumjua Mungu kila siku, kukua katika mfano wake, na kupitia uwepo wake.',
      category: 'eternal-life',
      categorySw: 'Kuishi Uzima wa Milele',
      step: 5,
      readTime: '16 min',
    },
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
