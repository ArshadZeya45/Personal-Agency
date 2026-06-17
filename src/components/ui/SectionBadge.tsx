import { SectionBadgeProps } from "@/types/sectionHeader";

const SectionBadge = ({ text }: SectionBadgeProps) => {
  return (
    <div className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25rem] text-cyan">
      {text}
    </div>
  );
};
export default SectionBadge;
