import OverviewCard from "./OverviewCard";

type Props = {
  overview: any;
};

const OverviewRight = ({ overview }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      {overview.cards.map((card: any) => (
        <OverviewCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default OverviewRight;
