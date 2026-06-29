import SectionBadge from "@/components/ui/SectionBadge";
import { Check } from "lucide-react";

type Props = {
  overview: any;
};

const OverviewLeft = ({ overview }: Props) => {
  return (
    <div>
      <SectionBadge text={overview.badge} />

      <h2 className="mt-7 text-2xl lg:text-3xl font-black leading-[1.08] tracking-tight">
        {overview.title}{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {overview.highlightedText}
        </span>
      </h2>

      <div className="mt-5 h-1 w-20 rounded-full bg-cyan-400" />

      <p className="mt-8 text-sm leading-7 text-slate-400 max-w-xl">
        {overview.description}
      </p>

      <div className="mt-10 space-y-6">
        {overview.points.map((point: string) => (
          <div key={point} className="flex items-center gap-4">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
              <Check size={14} className="text-black" strokeWidth={3} />
            </div>

            <p className="text-sm text-slate-300">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewLeft;
