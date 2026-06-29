import CardGrid from "@/components/shared/CardGrid";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyChooseUsData } from "@/data/whyChooseUs";
import WhyChooseUsCard from "./whyChooseUsCard";

const whyChooseUsSection = () => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader
        badge="The Nexgenix Advantage"
        title="Why Industry Leaders"
        highlightedText="Choose Us"
        description="We don't just write code or run ads. We act as your strategic growth partner."
      />
      <CardGrid className="xl:grid-cols-3">
        {whyChooseUsData.map((item) => (
          <WhyChooseUsCard key={item.title} item={item} />
        ))}
      </CardGrid>
    </section>
  );
};
export default whyChooseUsSection;
