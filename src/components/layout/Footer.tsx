import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart, Computer, MessageCircle, Instagram, Facebook, Send, ExternalLink } from 'lucide-react';
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
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border">
                <img
                  src="/logo.png"
                  alt="John 17:3 Logo"
                  className="w-full h-full object-contain"
                />
              </div>


              <span className="font-serif text-xl font-semibold">Eternal Life Ministry</span>
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
              <Link to="/books" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.books')}
              </Link>
              <Link to="/teachings" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.teachings')}
              </Link>
              <Link to="/about" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors text-sm">
                {t('nav.contact')}
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
                href="mailto:eternallife.173@gmail.com"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                eternallife.173@gmail.com
              </a>

              <a
                href="https://chat.whatsapp.com/HUZU6Ows7Z01zkq2RuW1BX"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              {/* <a
                href="https://instagram.com/eternallife"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a> */}
              <a
                href="https://t.me/eternal_life173"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              {/* <a
                href="https://facebook.com/eternallife"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a> */}
              <a
                href="https://egwwritings.org/"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                EGW Writings
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
              Made with <Heart className="w-4 h-4 text-burgundy" /> eternal life ministry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
