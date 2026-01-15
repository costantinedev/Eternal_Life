import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Scale, Flame, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const KnowGod: React.FC = () => {
  const { language } = useLanguage();

  const attributes = [
    {
      icon: Heart,
      title: language === 'en' ? 'God is Love' : 'Mungu ni Upendo',
      description: language === 'en'
        ? 'Love is not merely something God does—it is who He is. His very nature is love, and everything He does flows from this eternal attribute.'
        : 'Upendo si jambo tu Mungu anafanya—ni yeye ni nani. Asili yake ni upendo, na kila kitu anachofanya kinatoka kwa sifa hii ya milele.',
      verse: '1 John 4:8',
    },
    {
      icon: Scale,
      title: language === 'en' ? 'God is Just' : 'Mungu ni Haki',
      description: language === 'en'
        ? 'God\'s justice is not cold retribution but the natural consequence of His holiness. He cannot look upon sin because it is contrary to His very being.'
        : 'Haki ya Mungu si kulipiza kisasi baridi bali ni matokeo ya asili ya utakatifu wake. Hawezi kuangalia dhambi kwa sababu inapingana na uwepo wake.',
      verse: 'Isaiah 30:18',
    },
    {
      icon: Shield,
      title: language === 'en' ? 'God is Merciful' : 'Mungu ni Rehema',
      description: language === 'en'
        ? 'Though God is just, He does not desire the death of the wicked. His mercy extends to all who turn to Him in repentance and faith.'
        : 'Ingawa Mungu ni haki, hataki kifo cha mwovu. Rehema yake inaenea kwa wote wanaomgeukia kwa toba na imani.',
      verse: 'Lamentations 3:22-23',
    },
    {
      icon: Flame,
      title: language === 'en' ? 'God is Holy' : 'Mungu ni Mtakatifu',
      description: language === 'en'
        ? 'Holiness means God is completely set apart from sin. His holiness is not a barrier but an invitation to be transformed into His likeness.'
        : 'Utakatifu maana yake Mungu ametengwa kabisa na dhambi. Utakatifu wake si kizuizi bali ni mwaliko wa kubadilishwa kuwa kama yeye.',
      verse: 'Isaiah 6:3',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                {language === 'en' ? 'Knowing God' : 'Kumjua Mungu'}
              </h1>
              <p className="text-lg md:text-xl text-cream/80 mb-8">
                {language === 'en'
                  ? 'To know God is not merely to know about Him—it is to experience His character personally and deeply.'
                  : 'Kumjua Mungu si kujua tu mambo yake—ni kupitia tabia yake kibinafsi na kwa undani.'}
              </p>
              <blockquote className="font-serif text-xl md:text-2xl italic text-gold-light">
                {language === 'en'
                  ? '"And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent."'
                  : '"Huu ndio uzima wa milele, wakujue Wewe, Mungu wa pekee wa kweli, na Yesu Kristo uliyemtuma."'}
                <footer className="mt-2 text-cream/60 text-base not-italic">— John 17:3</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading text-center mb-8">
                {language === 'en' ? 'Why Knowing God Matters' : 'Kwa Nini Kumjua Mungu Ni Muhimu'}
              </h2>
              <div className="prose prose-lg mx-auto text-charcoal-light">
                <p className="text-lg leading-relaxed mb-6">
                  {language === 'en'
                    ? 'Many people know facts about God—His power, His creation, His laws. But Jesus defined eternal life not as knowing about God, but as knowing God Himself. This is a personal, transformative relationship that begins now and continues forever.'
                    : 'Watu wengi wanajua ukweli kuhusu Mungu—nguvu zake, uumbaji wake, sheria zake. Lakini Yesu alifafanua uzima wa milele si kama kujua kuhusu Mungu, bali kama kumjua Mungu mwenyewe. Huu ni uhusiano wa kibinafsi, unaobadilisha unaoanza sasa na kuendelea milele.'}
                </p>
                <p className="text-lg leading-relaxed">
                  {language === 'en'
                    ? 'The character of God is revealed most clearly through His law and ultimately through Jesus Christ. When we understand who God truly is, we are drawn to Him in love, not driven by fear or obligation.'
                    : 'Tabia ya Mungu inafunuliwa wazi zaidi kupitia sheria yake na hatimaye kupitia Yesu Kristo. Tunapomuelewa Mungu kweli ni nani, tunavutwa kwake kwa upendo, si kusukumwa na hofu au wajibu.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* God's Character Attributes */}
        <section className="py-16 bg-sage-light">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">
              {language === 'en' ? 'The Character of God' : 'Tabia ya Mungu'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {attributes.map((attr, index) => {
                const IconComponent = attr.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                          {attr.title}
                        </h3>
                        <p className="text-charcoal-light leading-relaxed mb-3">
                          {attr.description}
                        </p>
                        <p className="text-sm text-gold font-medium">{attr.verse}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              {language === 'en' ? 'Continue Your Journey' : 'Endelea Safari Yako'}
            </h2>
            <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Understanding God\'s character is just the beginning. Explore the complete journey from knowing God to living eternal life daily.'
                : 'Kuelewa tabia ya Mungu ni mwanzo tu. Chunguza safari kamili kutoka kumjua Mungu hadi kuishi uzima wa milele kila siku.'}
            </p>
            <Button variant="hero" asChild>
              <Link to="/journey" className="flex items-center gap-2">
                {language === 'en' ? 'Explore the Full Journey' : 'Chunguza Safari Kamili'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KnowGod;
