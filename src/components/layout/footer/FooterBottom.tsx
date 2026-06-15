import FooterSocials from "./FooterSocials";

const FooterBottom = () => {
  return (
    <div className="mt-16 flex flex-col md:items-center md:justify-between gap-6 border-t border-white/10 pt-8 md:flex-row items-start">
      <p className="text-sm text-muted">
        © 2026 Personal Agency. All rights reserved. Made with ❤️ in India.
      </p>
      <FooterSocials />
    </div>
  );
};
export default FooterBottom;
