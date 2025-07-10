'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CourseOverview from '@/components/sections/CourseOverview';
import CurriculumSection from '@/components/sections/CurriculumSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import LearningOutcomesSection from '@/components/sections/LearningOutcomesSection';
import InstructorProfileSection from '@/components/sections/InstructorProfileSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CertificationSection from '@/components/sections/CertificationSection';
import PricingSection from '@/components/sections/PricingSection';
import EnrollmentOptionsSection from '@/components/sections/EnrollmentOptionsSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/sections/Footer';
import ProgressBar from '@/components/ui/ProgressBar';
import ExitIntentPopup from '@/components/ui/ExitIntentPopup';
import MobileBottomBar from '@/components/ui/MobileBottomBar';
import { useExitIntent } from '@/hooks/useExitIntent';

export default function Home() {
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
  
  // Exit intent hook
  useExitIntent({
    onExitIntent: () => {
      setIsExitPopupOpen(true);
    },
    delay: 500,
    sensitivity: 10
  });

  const handleClaimDiscount = () => {
    alert('Congratulations! Your discount has been applied. Our counselor will contact you shortly.');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918299708052?text=Hi! I want to know more about the Data Analytics course', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+918299708052');
  };

  const handleEnrollClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <ProgressBar />
      <Navigation />
      <HeroSection />
      <CourseOverview />
      <CurriculumSection />
      <TargetAudienceSection />
      <LearningOutcomesSection />
      <InstructorProfileSection />
      <TestimonialsSection />
      <CertificationSection />
      <PricingSection />
      <EnrollmentOptionsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      
      <MobileBottomBar
        onWhatsAppClick={handleWhatsAppClick}
        onCallClick={handleCallClick}
        onEnrollClick={handleEnrollClick}
      />
      
      <ExitIntentPopup
        isOpen={isExitPopupOpen}
        onClose={() => setIsExitPopupOpen(false)}
        onClaimDiscount={handleClaimDiscount}
      />
    </main>
  );
}
