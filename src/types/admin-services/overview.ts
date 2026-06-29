import { LucideIcon } from "lucide-react";

export interface OverviewCard {
  title: string;
  description: string;
  color: string;
  icon : LucideIcon
}

export interface Overview {
  badge: string;
  title: string;
  highlightedText: string;
  description: string;

  points: string[];

  cards: OverviewCard[];
}