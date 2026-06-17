import HeroBagde from "./HeroBagde";
import HeroContent from "./HeroContent";
import HeroDecorations from "./HeroDecorations";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* <HeroDecorations /> */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
        <HeroBagde />
        <HeroContent />
      </div>
    </section>
  );
};
export default Hero;
