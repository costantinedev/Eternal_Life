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

    const keywords = ['Only Two Classes', 'Family Members Are Separated', 'No Excuse for Willful Blindness', 'The Importance of Practical Benevolence','The Terror of the Lost',
      'Jesus', 'Holy Spirit', 'Bible', 'Sunday-Law Advocates Do Not Realize What They Are Doing', 'Rome Will Regain Her Lost Supremacy', 'Motive Gives Character to Actions',
      'Scripture', 'Three Angle\'s Message', 'Not to Sit in Quietude, Doing Nothing', 'A National Sunday Law Means National Apostasy', 'What the Seal of God Is','Homeward Bound',
      'Redemption', 'Eternal Life', 'Mungu', 'Oppose Sunday Laws by Pen and Vote', 'National Apostasy Will Be Followed by National Ruin','Enforcement of Sunday Observance Is the Test',
      'Roho', 'Yesu', 'Ufunuo', 'Heaven', 'The United States Will Pass a Sunday Law', 'Universal Sunday Legislation', 'A Likeness to Christ in Character','The Wicked Are Slain',
      'Father', 'Son', 'uasi wa sheria', 'Arguments Used by Sunday-Law Advocates', 'The Whole World Will Support Sunday Legislation','Awake Ye That Sleep and Arise','The Angels Sing, Christ Has Conquered',
      'the transgression of the law', 'Protestantism and Catholicism Act in Concert', 'The Controversy Centers in Christendom','When the Mark of the Beast Is Received',
      'The Seventh Plague and the Special Resurrection', 'Sunday Laws Honor Rome', 'Show No Defiance', 'Beauty of Truth Made Apparent by Opposition','From Caves and Dens and Dungeons',
      'God Announces the Time of Christ’s Coming', 'Refrain From Work on Sunday', 'Engage in Spiritual Activities on Sunday','Descends in Power and Glory','From Ocean Depths and Mines and Mountains',
      'The Sabbath the Great Point at Issue', 'We Ought to Obey God Rather Than Men', 'In the Sealing Time Now', 'Oh, That God’s Seal May Be Placed Upon Us!','The Saints Given Crowns and Harps',
      'The Sunday-Law Movement in the 1880s', 'Judged by the Light We Have Received','What the Mark of the Beast Is','The Reaction of Those Who Pierced Him','Destruction of the Wicked an Act of Mercy'
      ,'Pigo la Saba na Ufufuo wa Kipekee','Anatangaza Wakati wa Kuja kwa Kristo','Hofu ya Waliopotea','Anashuka kwa Uwezo na Utukufu','Mwitikio wa Wale Waliomchoma','Amkeni, Ninyi Mnaolala, na Msimame'
    ,'Kutoka Katika Mapango na Mashimo na Magereza','Kutoka Vilindi vya Bahari na Migodi na Milima','Waovu Wanauawa','Uharibifu wa Waovu ni Tendo la Rehema','Safari ya Kuelekea Nyumbani',
    'Malaika Wanaimba, Kristo Ameshinda','Watakatifu Wanapewa Taji na Vinubi','Chapa ya Mnyama ni Nini','Wakati Ambapo Chapa ya Mnyama Inapokelewa','Utekelezaji wa Ushikaji wa Jumapili ndilo Jaribio'
   ,'Makundi Mawili Tu','Wanafamilia Wanatenganishwa','Kuhukumiwa kwa Nuru Tuliyoipokea','Hakuna Udhibiti kwa Upofu wa Makusudi','Umuhimu wa Hisani ya Matendo','Nia Hutoa Tabia kwa Matendo','Muhuri wa','ni Nini',
   'Mfano wa Kristo katika Tabia','Katika Wakati wa Kupigwa Muhuri Sasa','Sabato Ndilo Suala Kuu la Mgogoro','Vuguvugu la Sheria ya Jumapili katika Miaka ya 1880','Watetezi wa Sheria ya Jumapili Hawatambui Wanachokifanya',
   ,'Kutoketi katika Utulivu, Bila Kufanya Lolote','Kupinga Sheria za Jumapili kwa Kalamu na Kura','Marekani Itapitisha Sheria ya Jumapili','Hoja Zinazotumiwa na Watetezi wa Sheria ya Jumapili',
   'Sheria za Jumapili Huheshimu Rumi','Sheria ya Kitaifa ya Jumapili Inamaanisha Uasi wa Kitaifa','Uasi wa Kitaifa Utafuatiwa na Angamizo la Kitaifa','Sheria ya Jumapili ya Ulimwengu Mzima',
   'Ulimwengu Wote Utategemeza Sheria ya Jumapili','Mgogoro Unajikita katika Ukristo','Usionyeshe Ukaidi','Jiepushe na Kazi Siku ya Jumapili','Jihusishe na Shughuli za Kiroho Siku ya Jumapili','Uzuri wa Ukweli Hudhihirishwa na Upinzani',
   'Kuliko Wanadamu','Imetupasa Kumtii'
  
  
  
  ];
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
