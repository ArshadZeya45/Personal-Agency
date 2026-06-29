import { Hero } from "./hero";
import { Stat } from "./stats";
import { Overview } from "./overview";
import { Solutions } from "./solutions";
import { Technologies } from "./technologies";
import { Process } from "./process";
import { FAQ } from "./faq";

export interface ServiceData {
  slug: string;

  hero: Hero;

  stats: Stat[];

  overview: Overview;

  solutions: Solutions;

  technologies: Technologies;

  process: Process;

  faq: FAQ;
}