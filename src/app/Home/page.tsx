import Hero from "@/features/hero/Hero";
import ImpactSection from "@/features/impact/ImpactSection";
import ProcessSection from "@/features/process/ProcessSection";
import Service from "@/features/service/ServiceSection";
import TestimonialSection from "@/features/testimonials/TestimonialSection";
import WhyChooseUsSection from "@/features/whyChooseUs/whyChooseUsSection";

const page = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <Service />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialSection />
    </>
  );
};
export default page;
