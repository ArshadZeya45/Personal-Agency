import { ImpactStat } from "@/types/impact";

type ImpactStatCardProps = {
  stat: ImpactStat;
};

const ImpactStatCard = ({ stat }: ImpactStatCardProps) => {
  return (
    <div className="relative  overflow-hidden rounded-3xl border border-white/10 bg-card px-8 py-14 text-center hover:scale-[1.03] transition duration-300 hover:border-cyan">
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
      <h3 className="relative bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent text-6xl font-bold">
        {stat.value}
      </h3>
      <p className="relative mt-6 text-lg font-semibold uppercase tracking-wide text-muted">
        {stat.label}
      </p>
    </div>
  );
};
export default ImpactStatCard;
