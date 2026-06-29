import { heroData } from "@/data/hero";

const HeroBagde = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-cyan/10 bg-cyan/10 px-5 py-3 lg:text-xs text-[10px] font-semibold uppercase tracking-wide text-cyan ">
      <span className="h-2 w-2 rounded-full bg-cyan" />
      {heroData.badge}
    </div>
  );
};
export default HeroBagde;
