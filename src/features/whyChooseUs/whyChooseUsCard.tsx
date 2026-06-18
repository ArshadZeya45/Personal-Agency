import { WhyChooseUsItem } from "@/types/whyChooseUs";

type Props = {
  item: WhyChooseUsItem;
};
const whyChooseUsCard = ({ item }: Props) => {
  const Icon = item.icon;
  return (
    <div
      className={`rounded-3xl border bg-card p-6 transition-all duration-300 ${item.featured ? "border-blue shadow-shadow-[0_0_40px_rgba(59,130,246,0.15)]" : "border-white/10"} hover:scale-105 transition-all duration-500 cursor-pointer`}
    >
      <Icon size={48} className="text-cyan mb-6" />
      <h3 className="text-lg font-bold mb-4">{item.title}</h3>
      <p className="text-muted text-sm leading-8">{item.description}</p>
    </div>
  );
};
export default whyChooseUsCard;
