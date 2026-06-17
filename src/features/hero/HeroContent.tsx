import { heroData } from "@/data/hero";
import HeroActions from "./HeroActions";

const HeroContent = () => {
  return (
    <>
      <h1 className="mt-8 max-w-3xl font-poppins font-bold text-5xl leading-none lg:text-6xl">
        We Build <span className="text-cyan">Digital Solutions</span>
        That Drive <span className="text-blue">Growth</span>
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted">
        {heroData.description}
      </p>
      <HeroActions />
    </>
  );
};
export default HeroContent;
