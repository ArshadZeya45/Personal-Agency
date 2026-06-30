import SolutionCard from "./SolutionCard";

type Props = {
  items: any[];
};

const SolutionGrid = ({ items }: Props) => {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <SolutionCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default SolutionGrid;
