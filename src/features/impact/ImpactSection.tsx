import SectionHeader from "@/components/shared/SectionHeader";
import ImpactStatsGrid from "./ImpactStatsGrid";

const ImpactSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <div>
        <SectionHeader
          badge="TRUSTED GLOBALLY"
          title="Delivering"
          highlightedText="Measurable Impact"
          description="We measure our success entirely by the growth, scalability, and revenue of our clients."
        />
        <ImpactStatsGrid />
      </div>
    </section>
  );
};
export default ImpactSection;
