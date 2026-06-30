import SectionHeader from "@/components/shared/SectionHeader";
import TechnologiesGrid from "./TechnologiesGrid";

type Props = {
  technologies: any;
};

const Technologies = ({ technologies }: Props) => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader
        badge={technologies.badge}
        title={technologies.title}
        highlightedText={technologies.highlightedText}
      />

      <TechnologiesGrid items={technologies.items} />
    </section>
  );
};

export default Technologies;
