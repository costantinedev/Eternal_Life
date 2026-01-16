import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Scale, AlertCircle, Cross, Sun, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Journey: React.FC = () => {
  const { t, language } = useLanguage();

  const journeySteps = [
    {
      number: 1,
      icon: Heart,
      title: language === 'en' ? "Why Sin Was Permitted?..." : "Kwa nini dhambi Iliruhusiwa?...",
      subtitle: language === 'en' ? "The Foundation of Eternal Life" : "Msingi wa Uzima wa Milele",
      description: language === 'en' 
        ? "God's character is the foundation of everything. To know Him is to understand His nature—a God of love, justice, mercy, and truth. His character is not arbitrary; it is eternal and unchanging."
        : "Tabia ya Mungu ndiyo msingi wa kila kitu. Kumjua ni kuelewa asili yake—Mungu wa upendo, haki, rehema, na ukweli. Tabia yake si ya kiholela; ni ya milele na haibadiliki.",
      verse: '"He who does not love does not know God, for God is love." — 1 John 4:8',
      topics: language === 'en' 
        ? ['The Nature of God', 'God is Love', 'God is Just', 'God is Merciful']
        : ['Asili ya Mungu', 'Mungu ni Upendo', 'Mungu ni Haki', 'Mungu ni Rehema'],
      color: 'gold',
    },
    {
      number: 2,
      icon: Scale,
      title: language === 'en' ? "The Plan of Salvation" : "Mpango Wa Ukombozi",
      subtitle: language === 'en' ? "A Reflection of His Character" : "Onyesho la Tabia Yake",
      description: language === 'en'
        ? "God's law is not a set of arbitrary rules but a perfect reflection of His character. The law is founded on love—love for God and love for others. Understanding this transforms how we see obedience."
        : "Sheria ya Mungu si sheria za kiholela bali ni onyesho kamili la tabia yake. Sheria imejengwa juu ya upendo—upendo kwa Mungu na upendo kwa wengine. Kuelewa hili kunabadilisha jinsi tunavyoona utii.",
      verse: '"Love is the fulfillment of the law." — Romans 13:10',
      topics: language === 'en'
        ? ['The Two Great Commandments', 'Law and Love', 'The Ten Commandments', 'Spirit of the Law']
        : ['Amri Mbili Kuu', 'Sheria na Upendo', 'Amri Kumi', 'Roho ya Sheria'],
      color: 'sage',
    },
    {
      number: 3,
      icon: AlertCircle,
      title: language === 'en' ? "Three Angel\'s Message" : "Ujumbe Wa Malaika Watatu",
      subtitle: language === 'en' ? "Separation from God's Love" : "Kutengana na Upendo wa Mungu",
      description: language === 'en'
        ? "Sin is the transgression of God's law—a departure from His character of love. It separates us from God, not because He rejects us, but because sin is inherently destructive to the soul."
        : "Dhambi ni kuvunja sheria ya Mungu—kuondoka kutoka tabia yake ya upendo. Inatutengana na Mungu, si kwa sababu anatukataa, bali kwa sababu dhambi ni uharibifu kwa nafsi.",
      verse: '"For the wages of sin is death, but the gift of God is eternal life." — Romans 6:23',
      topics: language === 'en'
        ? ['What is Sin?', 'The Origin of Sin', 'Consequences of Sin', 'The Need for a Savior']
        : ['Dhambi ni Nini?', 'Asili ya Dhambi', 'Matokeo ya Dhambi', 'Haja ya Mwokozi'],
      color: 'burgundy',
    },
    {
      number: 4,
      icon: Cross,
      title: language === 'en' ? "Justice and Judgment" : "Haki Na Hukumu'",
      subtitle: language === 'en' ? "Justice and Mercy United" : "Haki na Rehema Zimeungana",
      description: language === 'en'
        ? "In Jesus Christ, we see the perfect revelation of God's character. The cross demonstrates both God's justice (the law must be upheld) and His mercy (He provides the way of salvation)."
        : "Katika Yesu Kristo, tunaona ufunuo kamili wa tabia ya Mungu. Msalaba unaonyesha haki ya Mungu (sheria lazima iheshimiwe) na rehema yake (anatoa njia ya wokovu).",
      verse: '"For God so loved the world that He gave His only begotten Son." — John 3:16',
      topics: language === 'en'
        ? ['The Gospel', 'The Cross Explained', 'Justification by Faith', 'The New Covenant']
        : ['Injili', 'Msalaba Umefafanuliwa', 'Kuhesabiwa Haki kwa Imani', 'Agano Jipya'],
      color: 'gold',
    },
    {
      number: 5,
      icon: Sun,
      title: language === 'en' ? "New Heaven and New Earth" : "Mbingu Mpya na Nchi Mpya",
      subtitle: language === 'en' ? "A Daily Relationship with God" : "Uhusiano wa Kila Siku na Mungu",
      description: language === 'en'
        ? "Eternal life is not just a future hope—it begins now. It is a daily, growing, transforming relationship with God through Christ. We are called to know Him more deeply each day."
        : "Uzima wa milele si tumaini la baadaye tu—unaanza sasa. Ni uhusiano wa kila siku, unaokua, unaobadilisha na Mungu kupitia Kristo. Tunaitwa kumjua zaidi kila siku.",
      verse: '"And this is eternal life, that they may know You, the only true God." — John 17:3',
      topics: language === 'en'
        ? ['Sanctification', 'Walking with God', 'Spiritual Disciplines', 'The Blessed Hope']
        : ['Utakaso', 'Kutembea na Mungu', 'Nidhamu za Kiroho', 'Tumaini Lenye Baraka'],
      color: 'sage',
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
              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`relative ${index !== journeySteps.length - 1 ? 'pb-12' : ''}`}
                  >
                    {/* Connection Line */}
                    {index !== journeySteps.length - 1 && (
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
                          {step.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4">{step.subtitle}</p>
                        
                        <p className="text-charcoal-light leading-relaxed mb-6">
                          {step.description}
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
                            {step.topics.map((topic, i) => (
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
