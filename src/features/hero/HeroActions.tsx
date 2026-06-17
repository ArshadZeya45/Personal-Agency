import { ArrowUpRight, Play } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue px-8 py-4 font-semibold text-bg shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-transform hover:scale-105 cursor-pointer">
        <ArrowUpRight size={18} />
        Start Your Project
      </button>
      <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-semibold transition-colors hover:bg-white/5 cursor-pointer">
        <Play size={18} />
        View Our Work
      </button>
    </div>
  );
};
export default HeroActions;
