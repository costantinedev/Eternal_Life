import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart, Computer, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">J</span>
              </div>
              <span className="font-serif text-xl font-semibold">John 17:3</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              {t('footer.mission')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">
              {t('footer.quickLinks')}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/journey" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.journey')}
              </Link>
              <Link to="/know-god" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.knowGod')}
              </Link>
              <Link to="/teachings" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.teachings')}
              </Link>
              <Link to="/about" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.about')}
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">
              {t('footer.connect')}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@john173.org"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info@eternallife.org
              </a>
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/eternallife"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://t.me/eternallife"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://facebook.com/eternallife"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Eternal Life {t('footer.rights')}
            </p>
            <p className="flex items-center gap-1 text-cream/60 text-sm">
              Made with <Computer className="w-4 h-4 text-burgundy" /> Costantine .dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
