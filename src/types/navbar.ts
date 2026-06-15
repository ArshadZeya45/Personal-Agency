import { LucideIcon } from "lucide-react";

export interface MenuItem {
    title : string;
    description? : string;
    href : string;
    icon? : LucideIcon;
}

export interface MenuSection {
    label : string;
    items : MenuItem[]
}

export interface DesktopMenuItem {
    title : string;
    href? : string;
    type? : "mega" | "dropdown";
    sections? : MenuSection[];
    items? : MenuItem[];
    icon? : LucideIcon
}