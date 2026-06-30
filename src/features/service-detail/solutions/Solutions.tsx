import SectionHeader from "@/components/shared/SectionHeader";
import SolutionGrid from "./SolutionGrid";
type Props = {
  solutions: any;
};
const Solutions = ({ solutions }: Props) => {
  return (
    <section className="py-10 lg:py-18">
      <SectionHeader
        badge={solutions.badge}
        title={solutions.title}
        highlightedText={solutions.highlightedText}
        description={solutions.description}
      />
      <SolutionGrid items={solutions.items} />
    </section>
  );
};
export default Solutions;
