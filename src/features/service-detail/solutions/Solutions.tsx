import SectionHeader from "@/components/shared/SectionHeader";
import SolutionGrid from "./SolutionGrid";
type Props = {
  solutions: any;
};
const Solutions = ({ solutions }: Props) => {
  return (
    <section className="py-20 lg:py-28">
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
