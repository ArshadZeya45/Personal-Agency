import { footerData } from "@/data/footer";
import Logo from "../navbar/Logo";

const FooterBrand = () => {
  return (
    <div className="lg:col-span-1">
      <Logo />
      <p className="mt-6 max-w-xs text-sm leading-7 text-muted">
        {footerData.brand?.description}
      </p>
    </div>
  );
};
export default FooterBrand;
