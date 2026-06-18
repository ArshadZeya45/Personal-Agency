import Hero from "@/features/hero/Hero";
import ImpactSection from "@/features/impact/ImpactSection";
import ServiceSection from "@/features/service/ServiceSection";
import WhyChooseUsSection from "@/features/whyChooseUs/whyChooseUsSection";

const page = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <ServiceSection />
      <WhyChooseUsSection />
    </>
  );
};
export default page;
