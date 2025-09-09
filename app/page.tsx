import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ClientsSection from '@/components/home/ClientsSection';
import CTASection from '@/components/home/CTASection';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <StatsSection />
      <ClientsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
