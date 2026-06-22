import { LucideIcon } from "lucide-react";

export interface ContactInfoItem {
    title : string;
    value : string;
    icon : LucideIcon
}

export interface SocialLink {
    name : string;
    href : string;
    icon : LucideIcon
}

export interface ContactFormData {
    fullName : string;
    companyName : string;
    email : string;
    phone : string;
    service : string;
    budget : string;
    projectDetails : string
}