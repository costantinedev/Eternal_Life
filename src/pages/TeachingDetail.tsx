import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import teachings from '@/data/teachings.json';
import teachingDetails from '@/data/teachingDetails.json';

const TeachingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  const teaching = teachings.find(t => t.id === id);
  const teachingDetail = teachingDetails.find(t => t.id === id);

  const boldKeywords = (text: string) => {
    const keywords = ['God', 'Christ', 'Jesus', 'Holy Spirit', 'Bible', 'Scripture', 'Three Angle\'s Message', 'Redemption', 'Eternal Life','Mungu','Roho'];
    let boldedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      boldedText = boldedText.replace(regex, `<strong>${keyword}</strong>`);
    });
    return boldedText;
  };

  if (!teaching) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-charcoal mb-4">
              {language === 'en' ? 'Teaching Not Found' : 'Fundisho Halipatikani'}
            </h1>
            <p className="text-muted-foreground mb-8">
              {language === 'en'
                ? 'The teaching you are looking for does not exist.'
                : 'Fundisho unalotafuta halipo.'}
            </p>
            <Button asChild>
              <Link to="/teachings">
                {language === 'en' ? 'Back to Teachings' : 'Rudi kwenye Mafundisho'}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-4 bg-cream border-b border-border">
          <div className="container mx-auto px-4">
            <Button variant="ghost" size="sm" asChild className="text-charcoal-light hover:text-charcoal">
              <Link to="/teachings" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                {language === 'en' ? 'Back to Teachings' : 'Rudi kwenye Mafundisho'}
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm font-semibold text-gold uppercase tracking-wide">
                  {language === 'en' ? 'Step' : 'Hatua'} {teaching.step}
                </span>
                
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                {language === 'en' ? teaching.title : teaching.titleSw}
              </h1>

                       
               <blockquote className="scripture-quote mb-6  text-white text-lg" >
                {language === 'en' ? teaching.excerpt : teaching.excerptSw}
               </blockquote>
            </div>
          </div>
        </section>

        {/* Full Lesson Content */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 md:p-12 shadow-md border border-border">
                {/* Description */}
                <div className="mb-12">
                  <div className="text-charcoal-light leading-relaxed text-lg mb-6 space-y-4 font-serif">
                    {teachingDetail ? (language === 'en' ? teachingDetail.description.en : teachingDetail.description.sw).map((paragraph, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: boldKeywords(paragraph) }} />
                    )) : ''}
                  </div>
                </div>

                {/* Key Points */}
                <div className="mb-12">
                  <h2 className="font-serif text-3xl font-semibold text-charcoal mb-6">
                    {language === 'en' ? 'Key Points' : 'Nukta Muhimu'}
                  </h2>
                  <ul className="space-y-4">
                    {teachingDetail && teachingDetail.keyPoints[language === 'en' ? 'en' : 'sw'].map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-charcoal-light leading-relaxed font-serif" dangerouslySetInnerHTML={{ __html: boldKeywords(point) }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
                  {(() => {
                    const currentIndex = teachings.findIndex(t => t.id === id);
                    const prevTeaching = currentIndex > 0 ? teachings[currentIndex - 1] : null;
                    const nextTeaching = currentIndex < teachings.length - 1 ? teachings[currentIndex + 1] : null;

                    return (
                      <>
                        <Button variant="outline" asChild className="flex-1">
                          <Link to={prevTeaching ? `/teachings/${prevTeaching.id}` : '/teachings'}>
                            {language === 'en' ? 'Previous' : 'Iliyopita'}
                          </Link>
                        </Button>
                        <Button asChild className="flex-1">
                          <Link to={nextTeaching ? `/teachings/${nextTeaching.id}` : '/journey'}>
                            {language === 'en' ? 'Next' : 'Ijayo'}
                          </Link>
                        </Button>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeachingDetail;
