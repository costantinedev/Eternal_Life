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
  'nav.books': { en: 'Books', sw: 'Vitabu' },
  'nav.about': { en: 'About', sw: 'Kuhusu' },
  'nav.contact': { en: 'Contact', sw: 'Wasiliana' },
  
  // Hero Section
  'hero.title': { en: 'Eternal Life', sw: 'Uzima wa Milele' },
  'hero.subtitle': { 
    en: 'A Christ-centered mentorship journey into eternal life', 
    sw: 'Safari ya uongozi inayomlenga Kristo kwenye uzima wa milele' 
  },
  'hero.verse': {
    en: '"This is life eternal: that they might know thee the only true God, and Jesus Christ whom thou hast sent."',
    sw: '"Huu ndio uzima wa milele, wakujue Wewe, Mungu wa pekee wa kweli, na Yesu Kristo uliyemtuma."'
  },
  'hero.reference': { en: 'John 17:3', sw: 'Yohana 17:3' },
  'hero.cta': { en: 'Begin Your Journey', sw: 'Anza Safari Yako' },
  'hero.learnMore': { en: 'Learn More', sw: 'Jifunze Zaidi' },

  // Journey Section
  'journey.title': { en: 'From Sin to Salvation', sw: 'Kutoka Dhambini Hadi Wokovu' },
  'journey.subtitle': { 
    en: 'Discover God’s plan to restore humanity and bring eternal hope.', 
    sw: 'Gundua mpango wa Mungu wa kurejesha binadamu na kuleta tumaini la milele' 
  },
  
  // Steps
'step1.title': { 
  en: 'Why Was Sin Permitted?', 
  sw: 'Kwa Nini Dhambi Iliruhusiwa?' 
},
'step1.desc': { 
  en: 'Understanding God’s character, freedom, and the origin of evil.', 
  sw: 'Kuelewa tabia ya Mungu, uhuru wa kuchagua, na asili ya uovu.' 
},

'step2.title': { 
  en: 'The Plan of Salvation', 
  sw: 'Mpango wa Wokovu' 
},
'step2.desc': { 
  en: 'God’s eternal plan to save humanity through Jesus Christ.', 
  sw: 'Mpango wa milele wa Mungu wa kumwokoa mwanadamu kupitia Yesu Kristo.' 
},

'step3.title': { 
  en: 'The Three Angels’ Messages', 
  sw: 'Ujumbe wa Malaika Watatu' 
},
'step3.desc': { 
  en: 'Heaven’s final message calling the world back to God.', 
  sw: 'Ujumbe wa mwisho wa mbinguni unaouita ulimwengu urejee kwa Mungu.' 
},

'step4.title': { 
  en: 'As It Was in the Days of Noah', 
  sw: 'Kama Ilivyokuwa Siku za Nuhu' 
},
'step4.desc': { 
  en: 'A warning from history repeating in the last days.', 
  sw: 'Onyo kutoka historia inayojirudia katika siku za mwisho.' 
},

'step5.title': { 
  en: 'The New Heaven and New Earth', 
  sw: 'Mbingu Mpya na Nchi Mpya' 
},
'step5.desc': { 
  en: 'God’s promise of eternal life in a restored world.', 
  sw: 'Ahadi ya Mungu ya uzima wa milele katika ulimwengu uliorejeshwa.' 
},

  

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

  // Contact
  'contact.title': { en: 'Contact Us', sw: 'Wasiliana Nasi' },
  'contact.description': { en: 'Get in touch with us for direct checking and spiritual guidance.', sw: 'Wasiliana nasi kwa uangalizi wa moja kwa moja na mwongozo wa kiroho.' },
  'contact.name': { en: 'Name', sw: 'Jina' },
  'contact.namePlaceholder': { en: 'Your name', sw: 'Jina lako' },
  'contact.email': { en: 'Email', sw: 'Barua pepe' },
  'contact.emailPlaceholder': { en: 'your.email@example.com', sw: 'barua.pepe@yako.com' },
  'contact.message': { en: 'Message', sw: 'Ujumbe' },
  'contact.messagePlaceholder': { en: 'Share your thoughts or questions...', sw: 'Shiriki mawazo au maswali yako...' },
  'contact.submit': { en: 'Send Message', sw: 'Tuma Ujumbe' },
  'contact.alternative': { en: 'Alternatively, you can reach us at:', sw: 'Vinginevyo, unaweza kutufikia kwa:' },
  'contact.success': { en: 'Thank you for your message. We will get back to you soon!', sw: 'Asante kwa ujumbe wako. Tutawasiliana nawe hivi karibuni!' },

  // Footer
  'footer.mission': {
    en: 'Guiding believers into a deeper, personal knowledge of God through Christ-centered mentorship.',
    sw: 'Kuwaongoza waamini katika ujuzi wa kina, wa kibinafsi wa Mungu kupitia uongozi unaomlenga Kristo.'
  },
  'footer.quickLinks': { en: 'Quick Links', sw: 'Viungo vya Haraka' },
  'footer.connect': { en: 'Join Groups and Platform', sw: 'Jiunge na Makundi na Jukwaa                                                                                                                                                             ' },
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
