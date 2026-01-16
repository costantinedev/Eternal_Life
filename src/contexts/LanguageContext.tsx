import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', sw: 'Nyumbani' },
  'nav.journey': { en: 'The Journey', sw: 'Safari' },
  'nav.knowGod': { en: 'Know God', sw: 'Mjue Mungu' },
  'nav.teachings': { en: 'Teachings', sw: 'Mafundisho' },
  'nav.about': { en: 'About', sw: 'Kuhusu' },
  
  // Hero Section
  'hero.title': { en: 'Know the Only True God', sw: 'Mjue Mungu wa Kweli Pekee' },
  'hero.subtitle': { 
    en: 'A Christ-centered mentorship journey into eternal life', 
    sw: 'Safari ya uongozi inayomlenga Kristo kwenye uzima wa milele' 
  },
  'hero.verse': {
    en: '"This is eternal life: that they may know You, the only true God, and Jesus Christ whom You have sent."',
    sw: '"Huu ndio uzima wa milele, wakujue Wewe, Mungu wa pekee wa kweli, na Yesu Kristo uliyemtuma."'
  },
  'hero.reference': { en: 'John 17:3', sw: 'Yohana 17:3' },
  'hero.cta': { en: 'Begin Your Journey', sw: 'Anza Safari Yako' },
  'hero.learnMore': { en: 'Learn More', sw: 'Jifunze Zaidi' },

  // Journey Section
  'journey.title': { en: 'The Path to Knowing God', sw: 'Njia ya Kumjua Mungu' },
  'journey.subtitle': { 
    en: 'Walk step by step from understanding who God is to living in daily fellowship with Him', 
    sw: 'Tembea hatua kwa hatua kutoka kuelewa Mungu ni nani hadi kuishi katika ushirika naye kila siku' 
  },
  
  // Steps
  'step1.title': { en: 'Why Sin Was Permitted?...', sw: 'Kwa nini dhambi Iliruhusiwa?...' },
  'step1.desc': { en: 'Discover who God truly is through His revealed character', sw: 'Gundua Mungu ni nani kupitia tabia yake iliyofunuliwa' },
  'step2.title': { en: 'The Plan of Salvation', sw: 'Mpango Wa Ukombozi' },
  'step2.desc': { en: 'God\'s law reveals His character and is founded on love', sw: 'Sheria ya Mungu inafunua tabia yake na imejengwa juu ya upendo' },
  'step3.title': { en: 'Three Ange\'s Message', sw: 'Ujumbe Wa Malaika Watatu' },
  'step3.desc': { en: 'Through Jesus, we see both God\'s justice and mercy united', sw: 'Kupitia Yesu, tunaona haki na rehema ya Mungu zimeungana' },
  'step4.title': { en: 'Justice and Judgment', sw: 'Haki Na Hukumu' },
  'step4.desc': { en: 'Through Jesus, we see both God\'s justice and mercy united', sw: 'Kupitia Yesu, tunaona haki na rehema ya Mungu zimeungana' },
  'step5.title': { en: 'A New Heaven and New Earth', sw: 'Mbingu Mpya na Nchi Mpya' },
  'step5.desc': { en: 'Eternal life begins now in daily relationship with God', sw: 'Uzima wa milele unaanza sasa katika uhusiano wa kila siku na Mungu' },
  

  // Featured Teaching
  'featured.label': { en: 'Featured Teaching', sw: 'Fundisho Maalum' },
  'featured.title': { en: 'The Character of God', sw: 'Tabia ya Mungu' },
  'featured.desc': { 
    en: 'Understanding God\'s character is the foundation of knowing Him. His law is not arbitrary rules but a reflection of who He is—a God of love, justice, and mercy.', 
    sw: 'Kuelewa tabia ya Mungu ndiyo msingi wa kumjua. Sheria yake si sheria za kiholela bali ni onyesho la yeye ni nani—Mungu wa upendo, haki, na rehema.' 
  },
  'featured.cta': { en: 'Read Full Teaching', sw: 'Soma Fundisho Kamili' },

  // CTA Section
  'cta.title': { en: 'Begin Your Journey Today', sw: 'Anza Safari Yako Leo' },
  'cta.desc': { 
    en: 'Eternal life is not just a future hope—it\'s a present reality. Start knowing God personally, deeply, and truthfully.', 
    sw: 'Uzima wa milele si tumaini la baadaye tu—ni ukweli wa sasa. Anza kumjua Mungu kibinafsi, kwa undani, na kwa ukweli.' 
  },
  'cta.button': { en: 'Start the Journey', sw: 'Anza Safari' },

  // Footer
  'footer.mission': { 
    en: 'Guiding believers into a deeper, personal knowledge of God through Christ-centered mentorship.', 
    sw: 'Kuwaongoza waamini katika ujuzi wa kina, wa kibinafsi wa Mungu kupitia uongozi unaomlenga Kristo.' 
  },
  'footer.quickLinks': { en: 'Quick Links', sw: 'Viungo vya Haraka' },
  'footer.connect': { en: 'Connect', sw: 'Wasiliana' },
  'footer.rights': { en: 'All rights reserved.', sw: 'Haki zote zimehifadhiwa.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
