import CardGrid from "@/components/shared/CardGrid";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/service";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <div>
        <SectionHeader
          badge="IT Services"
          title="Everything Digital,"
          highlightedText="Under One Hub"
          description="10 expert services crafted to grow your business — from idea to launch and beyond."
        />
        <CardGrid className="xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </CardGrid>
      </div>
    </section>
  );
};
export default ServiceSection;
