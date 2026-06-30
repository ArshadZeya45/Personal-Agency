import TechnologyCard from "./TechnologyCard";

type Props = {
  items: any[];
};

const TechnologiesGrid = ({ items }: Props) => {
  return (
    <div
      className="
      mt-14
      grid
      grid-cols-2
      md:grid-cols-4
      xl:grid-cols-8
      gap-4
      "
    >
      {items.map((item) => (
        <TechnologyCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default TechnologiesGrid;
