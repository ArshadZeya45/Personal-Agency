import Link from "next/link";
import { MenuSection } from "@/types/navbar";

interface MegaMenuProps {
  sections?: MenuSection[];
}

const MegaMenu = ({ sections }: MegaMenuProps) => {
  return (
    <div
      className="
        invisible
        absolute
        top-full
        
        z-50
        mt-3
        rounded-xl
        border-0.5
        border-bw
        bg-card2
        p-8
        shadow-2xl
        backdrop-blur-xl
        opacity-0
        transition-all
        duration-300
        group-hover:visible
        group-hover:opacity-100
      "
    >
      <div
        className={`grid ${sections?.length == 1 ? "grid-cols-1" : "grid-cols-2"} gap-10`}
      >
        {sections?.map((section) => (
          <div key={section.label}>
            {/* Section Heading */}
            <h3 className="mb-5 border-b border-white/10 pb-3 text-xs font-semibold uppercase tracking-wider text-blue">
              {section.label}
            </h3>

            {/* Section Items */}
            <div className="space-y-3">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-2 rounded-lg p-2 transition-colors hover:bg-white/5"
                  >
                    {/* Icon */}
                    {Icon && (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                        <Icon size={18} className="text-cyan" />
                      </div>
                    )}

                    {/* Text */}
                    <div>
                      <h4 className="font-medium text-text text-sm">
                        {item.title}
                      </h4>

                      {item.description && (
                        <p className="text-xs text-muted">{item.description}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
