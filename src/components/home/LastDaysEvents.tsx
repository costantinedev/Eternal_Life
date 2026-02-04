import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, AlertTriangle, Crown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const LastDaysEvents: React.FC = () => {
  const { t } = useLanguage();
  const { language } = useLanguage();

  const events = [
    {
      id: 'sunday-law',
      title: language === 'en' ? 'Sunday Law' : 'Sheria ya Jumapili',
      excerpt: language === 'en'
        ? 'The Sunday law represents a critical turning point in the final events of earth\'s history.'
        : 'Sheria ya Jumapili inawakilisha hatua muhimu katika matukio ya mwisho ya historia ya dunia.',
      icon: Clock,
      color: 'text-blue-600'
    },
    {
      id: 'seal-of-god',
      title: language === 'en' ? 'Seal of God' : 'Muhuri wa Mungu',
      excerpt: language === 'en'
        ? 'The seal of God is the divine mark of approval placed upon those who remain faithful.'
        : 'Muhuri wa Mungu ni alama ya kibali cha kimungu iliyowekwa juu ya wale wanaobaki waaminifu.',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      id: 'mark-of-the-beast',
      title: language === 'en' ? 'Mark of the Beast' : 'Chapa ya Mnyama',
      excerpt: language === 'en'
        ? 'The mark of the beast is the ultimate symbol of rebellion against God.'
        : 'Chapa ya mnyama ni ishara ya mwisho ya uasi dhidi ya Mungu.',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      id: 'christ-return',
      title: language === 'en' ? 'Christ\'s Return' : 'Kurudi kwa Kristo',
      excerpt: language === 'en'
        ? 'Christ\'s glorious return marks the culmination of earth\'s history.'
        : 'Kurudi kwa utukufu kwa Kristo kunaashiria kilele cha historia ya dunia.',
      icon: Crown,
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              {language === 'en' ? 'Last Days Events' : 'Matukio ya Siku za Mwisho'}
            </h2>
            <p className="text-charcoal-light leading-relaxed text-lg max-w-3xl mx-auto">
              {language === 'en'
                ? 'Understanding the prophetic events that will unfold before Christ\'s return is crucial for spiritual preparation.'
                : 'Kuelewa matukio ya unabii yatakayotokea kabla ya kurudi kwa Kristo ni muhimu kwa maandalizi ya kiroho.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => {
              const IconComponent = event.icon;
              return (
                <Card key={event.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${event.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {event.excerpt}
                    </CardDescription>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/teachings/${event.id}`} className="flex items-center gap-2">
                        {language === 'en' ? 'Learn More' : 'Jifunze Zaidi'}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/teachings" className="flex items-center gap-2">
                {language === 'en' ? 'Explore All Teachings' : 'Chunguza Mafundisho Yote'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastDaysEvents;
