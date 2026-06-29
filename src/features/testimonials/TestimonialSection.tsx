import SectionHeader from "@/components/shared/SectionHeader";
import { testimonialsData } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <section className="py-10 lg:py-18 relative">
      <SectionHeader
        badge="Success Stories"
        title="What Our Clients Say"
        highlightedText="About Us"
        description="Real results from real clients — here's how we helped businesses transform digitally."
      />
      <Marquee
        className="mt-15"
        pauseOnHover
        gradient={false}
        speed={40}
        autoFill
      >
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </Marquee>
    </section>
  );
};
export default TestimonialSection;
