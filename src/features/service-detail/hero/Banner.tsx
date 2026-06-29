import Link from "next/link";
import { Rocket } from "lucide-react";
import { Hero } from "@/types/admin-services";
import Badge from "./Badge";

type BannerProps = {
  hero: Hero;
};

const Banner = ({ hero }: BannerProps) => {
  const Icon = hero.badge.icon;

  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 flex  flex-col items-center justify-center text-center">
        <Badge icon={Icon && <Icon size={18} />}>{hero.badge.text}</Badge>

        <h1 className="mt-8 max-w-6xl text-3xl font-black leading-none lg:text-6xl">
          {hero.title.normal}

          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ml-2">
            {hero.title.highlighted}
          </span>
        </h1>

        <p className="mt-8 max-w-3xl lg:text-base text-sm leading-6 text-slate-400">
          {hero.description}
        </p>

        <button
          className="
            mt-10
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-blue-500
            px-7
            py-3
            lg:text-base
            font-semibold
            cursor-pointer
            transition-all
            duration-300
            hover:scale-105
            flex 
            items-center
            gap-2
            text-sm
          "
        >
          <Rocket size={18} /> {hero.button.text}
        </button>
      </div>
    </section>
  );
};

export default Banner;
