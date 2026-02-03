import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReadingSettings } from '@/contexts/ReadingSettingsContext';
import teachings from '@/data/teachings.json';
import teachingDetails from '@/data/teachingDetails.json';

const TeachingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { settings, getFontSizeClass, getFontStyleClass } = useReadingSettings();

  const teaching = teachings.find(t => t.id === id);
  const teachingDetail = teachingDetails.find(t => t.id === id);

  const boldKeywords = (text: string) => {
    if (!settings.highlightKeywords) return text;

    const keywords = ['God', 'Christ', 
      'Jesus', 'Holy Spirit', 'Bible', 
      'Scripture', 'Three Angle\'s Message',
       'Redemption', 'Eternal Life', 'Mungu', 
       'Roho', 'Yesu', 'Ufunuo', 'Heaven', 
       'Father', 'Son','uasi wa sheria',
      'the transgression of the law'];
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
                  <div className={`text-charcoal-light leading-relaxed mb-6 space-y-4 ${getFontSizeClass()} ${getFontStyleClass()}`}>
                    {teachingDetail ? (language === 'en' ? teachingDetail.description.en : teachingDetail.description.sw).map((paragraph, index) => (
                      <p key={index} dangerouslySetInnerHTML={{ __html: boldKeywords(paragraph) }} />
                    )) : ''}
                  </div>
                </div>

                {/* WhatsApp Call-to-Action */}
                <div className="mt-16 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal mb-4">
                    {language === 'en'
                      ? 'Continue the Study Together'
                      : 'Endelea Kujifunza Pamoja'}
                  </h3>

                  <p className={`text-charcoal-light mb-6 ${getFontSizeClass()} ${getFontStyleClass()}`}>
                    {language === 'en'
                      ? 'Join our Eternal Life Ministry WhatsApp group to grow deeper in Scripture, ask questions, and walk this journey of faith together.'
                      : 'Jiunge na kikundi chetu cha WhatsApp cha Eternal Life Ministry, ili kukua zaidi katika Neno, kuuliza maswali, na kutembea safari ya imani pamoja.'}
                  </p>

                  <a
                    href="https://chat.whatsapp.com/HUZU6Ows7Z01zkq2RuW1BX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition"
                  >
                    {language === 'en' ? 'Join Bible Study Group' : 'Jiunge na Kikundi cha Biblia'}
                  </a>
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
                        {nextTeaching && (
                          <Button asChild className="flex-1">
                            <Link to={`/teachings/${nextTeaching.id}`}>
                              {language === 'en' ? 'Next' : 'Ijayo'}
                            </Link>
                          </Button>
                        )}
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
