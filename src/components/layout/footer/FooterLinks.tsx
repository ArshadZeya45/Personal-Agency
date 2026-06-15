import { footerData } from "@/data/footer";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <>
      {footerData.sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-text">
            {section.title}
          </h3>
          <ul className="space-y-4">
            {section.links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-muted text-sm  transitions-color hover:text-text"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
export default FooterLinks;
