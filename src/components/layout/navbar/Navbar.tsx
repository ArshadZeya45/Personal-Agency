import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl  items-center justify-between py-3 lg:px-6 px-4">
        <Logo />
        <DesktopMenu />
        <button className="bg-blue hover:bg-[#2563EB]  text-text  focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 rounded-md transition-colors duration-300 lg:text-sm text-xs text-nowrap font-medium cursor-pointer hidden lg:block">
          Get a Quote
        </button>
        <MobileMenu />
      </nav>
    </header>
  );
};
export default Navbar;
