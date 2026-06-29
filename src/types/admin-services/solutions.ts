export interface SolutionItem {
  title: string;
  description: string;
  color: string;
}

export interface Solutions {
  badge: string;

  title: string;

  highlightedText: string;

  description: string;

  items: SolutionItem[];
}