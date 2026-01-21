import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const Books: React.FC = () => {
  const { language } = useLanguage();
  const [filterLanguage, setFilterLanguage] = useState<string>('all');

  // List of PDFs available for download
  const pdfs = [
    {
      id: 'sample',
      title: language === 'en' ? 'Sample PDF' : 'Mfano wa PDF',
      description: language === 'en'
        ? 'A sample PDF file for demonstration purposes.'
        : 'Faili ya mfano ya PDF kwa madhumuni ya onyesho.',
      filename: 'costantine_cv.docx (3).pdf',
      size: '1 KB',
      lang: 'en'
    },
    {
      id: 'sample2',
      title: language === 'en' ? 'Cover Letter PDF' : 'Barua ya Kufungua PDF',
      description: language === 'en'
        ? 'A sample cover letter PDF file.'
        : 'Faili ya mfano ya barua ya kufungua PDF.',
      filename: 'cover letter.pdf',
      size: '1 KB',
      lang: 'sw'
    }
    // Add more PDFs here as they are added to public/pdfs/
  ];

  // Filter PDFs based on selected language
  const filteredPdfs = filterLanguage === 'all' ? pdfs : pdfs.filter(pdf => pdf.lang === filterLanguage);

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-charcoal">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
              {language === 'en' ? 'Books' : 'Vitabu'}
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Download PDF resources to deepen your understanding of God\'s word.'
                : 'Pakua rasilimali za PDF ili kuongeza ufahamu wako wa neno la Mungu.'}
            </p>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            {/* Language Filter */}
            <div className="mb-8 flex justify-center">
              <Select value={filterLanguage} onValueChange={setFilterLanguage}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="sw">Swahili</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredPdfs.map(pdf => (
                <article
                  key={pdf.id}
                  className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-gold" />
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-charcoal">
                          {pdf.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {pdf.size}
                        </p>
                      </div>
                    </div>

                    <p className="text-charcoal-light mb-6">
                      {pdf.description}
                    </p>
                  </div>

                  <div className="px-6 pb-6">
                    <Button
                      onClick={() => handleDownload(pdf.filename)}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {language === 'en' ? 'Download' : 'Pakua'}
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {pdfs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'No books available at the moment.'
                    : 'Hakuna vitabu vinavyopatikana kwa sasa.'}
                </p>
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'More PDF resources will be added regularly. Check back often!'
                  : 'Rasilimali zaidi za PDF zitaongezwa mara kwa mara. Rudia mara nyingi!'}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Books;
