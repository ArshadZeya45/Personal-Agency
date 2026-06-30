import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "cyan" | "blue" | "purple" | "green" | "orange" | "yellow";
};

const colorStyles = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    icon: "text-cyan-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    icon: "text-orange-400",
  },
  yellow: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    icon: "text-yellow-400",
  },
};

const SolutionCard = ({ title, description, icon: Icon, color }: Props) => {
  const style = colorStyles[color];

  return (
    <div
      className="
       
rounded-2xl
cursor-pointer
border
border-blue-500/20
bg-[#111620]
p-8
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-500/40
hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]
"
    >
      <div
        className={`
          h-13
          w-13
          rounded-2xl
          border
          flex
          items-center
          justify-center
          
          ${style.bg}
          ${style.border}
        `}
      >
        <Icon size={22} className={style.icon} strokeWidth={2} />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-tight text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
};

export default SolutionCard;
