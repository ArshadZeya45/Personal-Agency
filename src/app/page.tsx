import AboutSection from "@/features/about/AboutSection";
import ContactsSection from "@/features/contact/ContactsSection";

import CTASection from "@/features/cta/CTASection";
import FaqSection from "@/features/faq/FaqSection";
import Hero from "@/features/hero/Hero";
import ImpactSection from "@/features/impact/ImpactSection";
import ProcessSection from "@/features/process/ProcessSection";
import ServiceSection from "@/features/service/ServiceSection";
import TestimonialSection from "@/features/testimonials/TestimonialSection";
import WhyChooseUsSection from "@/features/whyChooseUs/whyChooseUsSection";

const page = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialSection />
      <AboutSection />
      <FaqSection />
      <CTASection />
      <ContactsSection />
    </>
  );
};
export default page;
