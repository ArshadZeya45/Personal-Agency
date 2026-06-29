import { LucideIcon } from "lucide-react";

export interface Hero {
  badge: {
   text : string;
   icon? : LucideIcon
  };
  title: {
    normal : string;
    highlighted? : string
  };
  description: string;

  button: {
    text: string;
    href: string;
  };
}