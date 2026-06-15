import { desktopMenus } from "@/data/navbar";
import MegaMenu from "./MegaMenu";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex items-center lg:space-x-6 md:space-x-3 lg:text-sm font-medium cursor-pointer text-muted text-nowrap">
      {desktopMenus.map((menu) => {
        const Icon = menu.icon;
        return (
          <div
            key={menu.title}
            className="group  hover:text-text transition-colors duration-300"
          >
            <div className="flex gap-0.5 items-center">
              {menu.title}
              {Icon ? (
                <Icon
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              ) : null}
            </div>
            {menu.sections && <MegaMenu sections={menu.sections} />}
          </div>
        );
      })}
    </div>
  );
};
export default DesktopMenu;
