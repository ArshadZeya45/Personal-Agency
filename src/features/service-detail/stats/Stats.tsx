import StatCard from "./StatCard";

type Stat = {
  value: string;
  label: string;
};

type Props = {
  stats: Stat[];
};

const Stats = ({ stats }: Props) => {
  return (
    <section className="py-10 lg:py-18">
      <div
        className="
          rounded-3xl
          border
          border-blue-500/20
          bg-[#0E1421]
          px-4
          py-3
          shadow-[0_0_40px_rgba(37,99,235,0.08)]
        "
      >
        <div className="grid lg:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              label={item.label}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
