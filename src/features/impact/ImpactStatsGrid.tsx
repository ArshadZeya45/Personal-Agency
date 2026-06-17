import { impactStats } from "@/data/impact";
import ImpactStatCard from "./ImpactStatCard";

const ImpactStatsGrid = () => {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {impactStats.map((stat) => (
        <ImpactStatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
};
export default ImpactStatsGrid;
