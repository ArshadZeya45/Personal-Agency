import { AboutFeature } from "@/types/about";

type Props = {
  feature: AboutFeature;
};

const AboutFeatureCard = ({ feature }: Props) => {
  const Icon = feature.icon;

  return (
    <div className="group  rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-cyan">
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text">{feature.title}</h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
    </div>
  );
};

export default AboutFeatureCard;
