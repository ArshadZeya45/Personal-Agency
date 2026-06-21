import { LucideIcon } from "lucide-react";

export interface AboutFeature {
    title : string;
    description : string;
    icon : LucideIcon
}

export interface AboutContentProps {
  paragraphOne: string;
  paragraphTwo: string;
}