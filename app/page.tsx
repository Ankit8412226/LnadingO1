import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import ClientsSection from '@/components/home/ClientsSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ClientsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}