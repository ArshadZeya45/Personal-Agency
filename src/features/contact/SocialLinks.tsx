import { socialLinks } from "@/data/contact";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="mt-8">
      <p className="mb-4 text-lg font-semibold text-text">Follow Our Journey</p>

      <div className="flex items-center gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-card
                text-muted
                transition-all
                duration-300
                hover:border-cyan/40
                hover:bg-cyan/10
                hover:text-cyan
                hover:-translate-y-1
              "
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
