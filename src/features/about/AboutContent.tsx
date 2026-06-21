import { AboutContentProps } from "@/types/about";

const AboutContent = ({ paragraphOne, paragraphTwo }: AboutContentProps) => {
  return (
    <div className="lg:max-w-2xl w-full space-y-8">
      <p className="text-base leading-9 text-muted lg:text-lg">
        {paragraphOne}
      </p>

      <p className="text-base leading-9 text-muted lg:text-lg">
        {paragraphTwo}
      </p>
    </div>
  );
};

export default AboutContent;
