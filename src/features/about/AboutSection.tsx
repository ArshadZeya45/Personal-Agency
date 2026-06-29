import SectionHeader from "@/components/shared/SectionHeader";
import AboutContent from "./AboutContent";
import { aboutContent, aboutFeatures } from "@/data/about";
import AboutFeatureGrid from "./AboutFeatureGrid";

const AboutSection = () => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader badge="About us" title="Who We" highlightedText="are" />
      <div className="grid lg:grid-cols-2 gap-16 mt-14">
        <AboutContent
          paragraphOne={aboutContent.paragraphOne}
          paragraphTwo={aboutContent.paragraphTwo}
        />
        <AboutFeatureGrid features={aboutFeatures} />
      </div>
    </section>
  );
};
export default AboutSection;
