import SectionHeader from "@/components/shared/SectionHeader";
import CTAButton from "./CTAButton";

const CTASection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <SectionHeader
        badge="Ready to Start?"
        title="Let's Build Something"
        highlightedText="Amazing Together"
        description="Tell us your idea — we'll turn it into reality. Fast, reliable, and world-class."
      />
      <div className="mt-10 flex justify-center">
        <CTAButton text="Get Free Consultant" />
      </div>
    </section>
  );
};
export default CTASection;
