export interface OverviewCard {
  title: string;
  description: string;
  color: string;
}

export interface Overview {
  badge: string;
  title: string;
  highlightedText: string;
  description: string;

  points: string[];

  cards: OverviewCard[];
}