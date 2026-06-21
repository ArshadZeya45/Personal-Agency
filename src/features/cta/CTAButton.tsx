import { ArrowRight } from "lucide-react";

type Props = {
  text: string;
};
const CTAButton = ({ text }: Props) => {
  return (
    <button
      className="
        inline-flex items-center gap-2
        rounded-2xl
        bg-gradient-to-r from-cyan to-blue
        px-8 py-4
        font-semibold text-black
        shadow-[0_0_40px_rgba(6,182,212,.35)]
        transition-all duration-300
        hover:scale-105
        cursor-pointer
      "
    >
      {text}
      <ArrowRight size={18} />
    </button>
  );
};
export default CTAButton;
