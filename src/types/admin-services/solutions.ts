import { IconType } from "react-icons";


export interface SolutionItem {
  title: string;
  description: string;
  color: string;
  icon : IconType
}

export interface Solutions {
  badge: string;

  title: string;

  highlightedText: string;

  description: string;

  items: SolutionItem[];
}