import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinks />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};
export default Footer;
