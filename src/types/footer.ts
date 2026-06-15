import { IconType } from "react-icons";

export interface FooterLink {
    title : string;
    href : string
}

export interface FooterSection {
    title : string;
    links : FooterLink[]
}

export interface SocialLink {
    name : string;
    href : string;
    icon : IconType
}

export interface FooterBrand{
    description : string;
}

export interface FooterData{
    brand : FooterBrand;
    sections : FooterSection[];
    socials : SocialLink[]
};

