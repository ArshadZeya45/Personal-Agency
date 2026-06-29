import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  color: "blue" | "green" | "purple" | "orange";
  icon: LucideIcon;
};

const OverviewCard = ({ title, description, color, icon: Icon }: Props) => {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-blue-500/20
      bg-[#0F1420]
      px-8
      py-8
      transition-all
      duration-300
      hover:border-blue-500/40
      "
    >
      {/* Left Border */}

      <div
        className={`absolute left-0 top-0 h-full w-[5px] rounded-full bg-${color}`}
      />

      <div className="flex gap-5">
        <div
          className={`mt-1
    
  `}
        >
          <Icon size={22} strokeWidth={2.5} color={color} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>

          <p className="mt-4 text-sm leading-6 text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
