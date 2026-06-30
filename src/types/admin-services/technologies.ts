import { IconType } from "react-icons";

export interface TechnologyItem {
  title: string;
  icon: IconType;
}

export interface Technologies {
  badge: string;

  title: string;

  highlightedText: string;

  items: TechnologyItem[];
}