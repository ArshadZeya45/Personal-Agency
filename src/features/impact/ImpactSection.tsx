import SectionHeader from "@/components/shared/SectionHeader";
import ImpactStatsGrid from "./ImpactStatsGrid";

const ImpactSection = () => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader
        badge="TRUSTED GLOBALLY"
        title="Delivering"
        highlightedText="Measurable Impact"
        description="We measure our success entirely by the growth, scalability, and revenue of our clients."
      />
      <ImpactStatsGrid />
    </section>
  );
};
export default ImpactSection;
