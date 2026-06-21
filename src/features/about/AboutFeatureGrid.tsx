import AboutFeatureCard from "./AboutFeatureCard";
import { AboutFeature } from "@/types/about";

type Props = {
  features: AboutFeature[];
};

const AboutFeatureGrid = ({ features }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {features.map((feature) => (
        <AboutFeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
};

export default AboutFeatureGrid;
