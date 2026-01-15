import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Target, BookOpen, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: BookOpen,
      title: language === 'en' ? 'Scripture-Rooted' : 'Imejengwa juu ya Maandiko',
      description: language === 'en'
        ? 'Every teaching is grounded in the Word of God. We believe the Bible is the inspired, authoritative guide for knowing God.'
        : 'Kila fundisho limejengwa juu ya Neno la Mungu. Tunaamini Biblia ni mwongozo wa kuvuviwa, wenye mamlaka wa kumjua Mungu.',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Christ-Centered' : 'Inayomlenga Kristo',
      description: language === 'en'
        ? 'Jesus Christ is the fullest revelation of God\'s character. All our teachings point to Him as the way, the truth, and the life.'
        : 'Yesu Kristo ndiye ufunuo kamili wa tabia ya Mungu. Mafundisho yetu yote yanamuelekeza Yeye kama njia, ukweli, na uzima.',
    },
    {
      icon: Users,
      title: language === 'en' ? 'Mentorship-Focused' : 'Inayolenga Uongozi',
      description: language === 'en'
        ? 'We walk alongside believers, not lecture at them. Spiritual growth happens in relationship, not isolation.'
        : 'Tunatembea pamoja na waumini, hatuwafundishi kwa mbali. Ukuaji wa kiroho hutokea katika uhusiano, si upweke.',
    },
    {
      icon: Target,
      title: language === 'en' ? 'Transformation-Oriented' : 'Inayolenga Mabadiliko',
      description: language === 'en'
        ? 'Our goal is not information but transformation. We want believers to know God, not just know about Him.'
        : 'Lengo letu si habari bali mabadiliko. Tunataka waumini wamjue Mungu, si kujua tu mambo yake.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                {language === 'en' ? 'About This Ministry' : 'Kuhusu Huduma Hii'}
              </h1>
              <p className="text-lg md:text-xl text-cream/80">
                {language === 'en'
                  ? 'A Christ-centered mentorship ministry dedicated to helping believers know God personally, deeply, and truthfully.'
                  : 'Huduma ya uongozi inayomlenga Kristo iliyojitolea kusaidia waumini kumjua Mungu kibinafsi, kwa undani, na kwa ukweli.'}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-8">
                {language === 'en' ? 'Our Foundation' : 'Msingi Wetu'}
              </h2>
              
              <blockquote className="font-serif text-2xl md:text-3xl italic text-charcoal mb-8 leading-relaxed">
                {language === 'en'
                  ? '"This is eternal life: that they may know You, the only true God, and Jesus Christ whom You have sent."'
                  : '"Huu ndio uzima wa milele, wakujue Wewe, Mungu wa pekee wa kweli, na Yesu Kristo uliyemtuma."'}
              </blockquote>
              <p className="text-gold font-semibold mb-8">— John 17:3</p>

              <div className="prose prose-lg mx-auto text-charcoal-light">
                <p className="mb-6">
                  {language === 'en'
                    ? 'This verse is our foundation. Jesus Himself defined eternal life—not as endless existence, but as knowing God. This is not intellectual knowledge, but experiential, transformational relationship.'
                    : 'Aya hii ndiyo msingi wetu. Yesu mwenyewe alifafanua uzima wa milele—si kuishi milele, bali kumjua Mungu. Hii si maarifa ya kiakili, bali uhusiano wa kupitia, unaobadilisha.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Our mission is to mentor believers into this knowledge—guiding them to understand God\'s character, His law of love, the nature of sin, and the redemption offered through Jesus Christ.'
                    : 'Misheni yetu ni kuwaongoza waumini katika ujuzi huu—kuwaongoza kuelewa tabia ya Mungu, sheria yake ya upendo, asili ya dhambi, na ukombozi unaotolewa kupitia Yesu Kristo.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-sage-light">
          <div className="container mx-auto px-4">
            <h2 className="section-heading text-center mb-12">
              {language === 'en' ? 'Our Values' : 'Maadili Yetu'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-8 shadow-md border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                          {value.title}
                        </h3>
                        <p className="text-charcoal-light leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-heading text-center mb-8">
                {language === 'en' ? 'Our Approach' : 'Njia Yetu'}
              </h2>
              <div className="prose prose-lg mx-auto text-charcoal-light">
                <p className="mb-6">
                  {language === 'en'
                    ? 'We believe in a structured yet Spirit-led approach to discipleship. Our teachings follow a logical, biblical flow:'
                    : 'Tunaamini katika njia iliyopangwa lakini inayoongozwa na Roho ya uanafunzi. Mafundisho yetu yanafuata mtiririko wa kimantiki, wa kibiblia:'}
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <strong>{language === 'en' ? "Know God's Character" : 'Jua Tabia ya Mungu'}</strong> — 
                    {language === 'en' 
                      ? ' Understanding who God is forms the foundation of all spiritual truth.'
                      : ' Kuelewa Mungu ni nani kunatenga msingi wa ukweli wote wa kiroho.'}
                  </li>
                  <li className="pl-2">
                    <strong>{language === 'en' ? "Understand His Law" : 'Elewa Sheria Yake'}</strong> — 
                    {language === 'en'
                      ? " God's law is a reflection of His character, founded on love."
                      : ' Sheria ya Mungu ni onyesho la tabia yake, imejengwa juu ya upendo.'}
                  </li>
                  <li className="pl-2">
                    <strong>{language === 'en' ? 'Recognize Sin' : 'Tambua Dhambi'}</strong> — 
                    {language === 'en'
                      ? ' Sin is the transgression of God\'s law—separation from His character.'
                      : ' Dhambi ni kuvunja sheria ya Mungu—kutengana na tabia yake.'}
                  </li>
                  <li className="pl-2">
                    <strong>{language === 'en' ? 'Accept Christ' : 'Mpokee Kristo'}</strong> — 
                    {language === 'en'
                      ? ' In Jesus, we see both God\'s justice and mercy perfectly revealed.'
                      : ' Katika Yesu, tunaona haki na rehema ya Mungu zimefunuliwa kikamilifu.'}
                  </li>
                  <li className="pl-2">
                    <strong>{language === 'en' ? 'Live Eternal Life' : 'Ishi Uzima wa Milele'}</strong> — 
                    {language === 'en'
                      ? ' Eternal life begins now in daily relationship with God.'
                      : ' Uzima wa milele unaanza sasa katika uhusiano wa kila siku na Mungu.'}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              {language === 'en' ? 'Begin Your Journey' : 'Anza Safari Yako'}
            </h2>
            <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'We invite you to start this transformational journey of knowing God—not just about Him, but knowing Him personally.'
                : 'Tunakualika uanze safari hii ya kubadilika ya kumjua Mungu—si kujua tu mambo yake, bali kumjua kibinafsi.'}
            </p>
            <Button variant="hero" asChild>
              <Link to="/journey" className="flex items-center gap-2">
                {language === 'en' ? 'Start the Journey' : 'Anza Safari'}
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

export default About;
