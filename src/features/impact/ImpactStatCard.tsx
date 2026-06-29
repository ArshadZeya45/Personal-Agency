import { ImpactStat } from "@/types/impact";

type ImpactStatCardProps = {
  stat: ImpactStat;
};

const ImpactStatCard = ({ stat }: ImpactStatCardProps) => {
  return (
    <div className="relative  overflow-hidden rounded-3xl border border-white/10 bg-card lg:px-8 py-14 px-4 text-center hover:scale-[1.03] transition duration-300 hover:border-cyan">
      <div
        className="
    absolute
    left-1/2
    top-0
    h-20
    w-20
    -translate-x-1/2

    rounded-full

    bg-cyan
    blur-3xl

    transition-all
    duration-500

    
  "
      />
      <h3 className="relative bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent lg:text-6xl text-3xl font-bold">
        {stat.value}
      </h3>
      <p className="relative lg:mt-6 mt-3 lg:text-lg text-sm font-semibold uppercase tracking-wide text-muted">
        {stat.label}
      </p>
    </div>
  );
};
export default ImpactStatCard;
