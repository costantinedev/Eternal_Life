import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Gavel, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const LastDaysEvents: React.FC = () => {
  const { language } = useLanguage();

  // Custom inline SVGs for Bible and 666
  const BibleIcon = () => (
    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm3 3h6v2H9V5zm0 4h6v2H9V9zm0 4h6v2H9v-2z"/>
    </svg>
  );

  const Mark666Icon = () => (
    <svg className="w-7 h-7 text-white" viewBox="0 0 64 64" fill="currentColor">
      <text x="0" y="50" fontSize="32" fontWeight="bold">666</text>
    </svg>
  );

  const events = [
    {
      id: 'sunday-law',
      title: language === 'en' ? 'Sunday Law' : 'Sheria ya Jumapili',
      excerpt:
        language === 'en'
          ? 'A prophetic turning point enforcing false worship before the close of probation.'
          : 'Hatua ya unabii inayolazimisha ibada ya uongo kabla ya kufungwa kwa mlango wa rehema.',
      Icon: Gavel,
      gradient: 'from-blue-500 to-indigo-600',
      accent: 'text-blue-600',
    },
    {
      id: 'seal-of-god',
      title: language === 'en' ? 'Seal of God' : 'Muhuri wa Mungu',
      excerpt:
        language === 'en'
          ? 'God’s divine mark upon those who remain faithful to His commandments.'
          : 'Alama ya Mungu kwa wale wanaobaki waaminifu kwa amri Zake.',
      Icon: BibleIcon,
      gradient: 'from-emerald-500 to-green-600',
      accent: 'text-emerald-600',
    },
    {
      id: 'mark-of-the-beast',
      title: language === 'en' ? 'Mark of the Beast' : 'Chapa ya Mnyama',
      excerpt:
        language === 'en'
          ? 'The final symbol of allegiance against God’s authority.'
          : 'Ishara ya mwisho ya utii kinyume na mamlaka ya Mungu.',
      Icon: Mark666Icon,
      gradient: 'from-red-500 to-rose-600',
      accent: 'text-red-600',
    },
    {
      id: 'christ-return',
      title: language === 'en' ? "Christ’s Return" : 'Kurudi kwa Kristo',
      excerpt:
        language === 'en'
          ? 'The glorious climax of history when Christ returns as King.'
          : 'Hitimisho la utukufu wa historia Kristo anaporudi kama Mfalme.',
      Icon: Crown,
      gradient: 'from-yellow-400 to-amber-600',
      accent: 'text-amber-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4">
              {language === 'en' ? 'Last Days Events' : 'Matukio ya Siku za Mwisho'}
            </h2>
            <p className="text-charcoal-light text-lg max-w-3xl mx-auto">
              {language === 'en'
                ? 'A prophetic overview of the final events leading to the return of Christ.'
                : 'Muhtasari wa unabii wa matukio ya mwisho yanayoongoza katika kurudi kwa Kristo.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => {
              const Icon = event.Icon;
              return (
                <Card
                  key={event.id}
                  className="group relative overflow-hidden border-muted hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${event.gradient} blur-xl opacity-10`}
                    />
                  </div>

                  <CardHeader className="text-center relative z-10">
                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icon />
                    </div>
                    <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-center space-y-5 relative z-10">
                    <CardDescription className="text-sm leading-relaxed">{event.excerpt}</CardDescription>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className={`group ${event.accent}`}
                    >
                      <Link
                        to={`/teachings/${event.id}`}
                        className="flex items-center gap-2 font-medium"
                      >
                        {language === 'en' ? 'Explore' : 'Chunguza'}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastDaysEvents;
