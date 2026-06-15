import { footerData } from "@/data/footer";
import Link from "next/link";

const FooterSocials = () => {
  return (
    <div className="flex items-center gap-3">
      {footerData.socials.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:text-text"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
};
export default FooterSocials;
