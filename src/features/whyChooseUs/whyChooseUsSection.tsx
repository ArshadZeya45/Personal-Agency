import CardGrid from "@/components/shared/CardGrid";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyChooseUsData } from "@/data/whyChooseUs";
import WhyChooseUsCard from "./whyChooseUsCard";

const whyChooseUsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <div>
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
      </div>
    </section>
  );
};
export default whyChooseUsSection;
