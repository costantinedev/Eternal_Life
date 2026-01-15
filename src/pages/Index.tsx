import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import JourneyPreview from '@/components/home/JourneyPreview';
import FeaturedTeaching from '@/components/home/FeaturedTeaching';
import CTASection from '@/components/home/CTASection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <JourneyPreview />
        <FeaturedTeaching />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
