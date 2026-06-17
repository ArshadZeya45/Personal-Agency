import { SectionHeaderProps } from "@/types/sectionHeader";
import SectionBadge from "../ui/SectionBadge";

const SectionHeader = ({
  badge,
  title,
  highlightedText,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {badge && (
        <div className="flex justify-center">
          <SectionBadge text={badge} />
        </div>
      )}

      <h2
        className="
          mt-8

          font-poppins
          font-bold

          text-4xl
          leading-none

          lg:text-5xl
        "
      >
        {title}{" "}
        {highlightedText && (
          <span
            className="
              bg-gradient-to-r
              from-blue
              to-cyan

              bg-clip-text
              text-transparent
            "
          >
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-lg
            leading-relaxed

            text-muted
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
