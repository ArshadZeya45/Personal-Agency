import Hero from "@/features/hero/Hero";
import ImpactSection from "@/features/impact/ImpactSection";
import Service from "@/features/service/ServiceSection";
import WhyChooseUsSection from "@/features/whyChooseUs/whyChooseUsSection";

const page = () => {
  return (
    <>
      <Hero />
      <ImpactSection />
      <Service />
      <WhyChooseUsSection />
    </>
  );
};
export default page;
