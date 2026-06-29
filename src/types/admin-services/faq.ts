export interface FAQItem {
  question: string;

  answer: string;
}

export interface FAQ {
  badge: string;

  title: string;

  highlightedText: string;

  items: FAQItem[];
}