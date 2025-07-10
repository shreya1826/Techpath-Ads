import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CourseOverview from '@/components/sections/CourseOverview';
import CurriculumSection from '@/components/sections/CurriculumSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <CourseOverview />
      <CurriculumSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  );
}
