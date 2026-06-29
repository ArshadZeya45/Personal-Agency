import SectionHeader from "@/components/shared/SectionHeader";
import FaqAccordion from "./FaqAccordion";
import { faqData } from "@/data/faq";

const FaqSection = () => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader
        badge="Questions?"
        title="Frequently Asked"
        highlightedText="Questions"
        description="Everything you need to know before starting your project."
      />

      <div className="mt-16">
        <FaqAccordion faqs={faqData} />
      </div>
    </section>
  );
};

export default FaqSection;
