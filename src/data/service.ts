import {
  ChartNoAxesCombined,
  LayoutGrid,
  Palette,
  Cog,
  Smartphone,
  ShoppingCart,
  Search,
  TestTube,
} from "lucide-react";

import { Service } from "@/types/service";

export const services: Service[] = [
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that scale your revenue, dominate search results, and flood your business with qualified leads.",
    icon: ChartNoAxesCombined,
  },

  {
    title: "Social Media Marketing",
    description:
      "Build a loyal community, amplify your brand voice, and turn engaged followers into paying customers across all major platforms.",
    icon: LayoutGrid,
  },

  {
    title: "Web Design",
    description:
      "Pixel-perfect, responsive websites that make powerful first impressions and convert visitors into customers.",
    icon: Palette,
  },

  {
    title: "Web App Development",
    description:
      "Scalable, fast web applications built with modern tech stacks tailored to your business logic.",
    icon: Cog,
  },

  {
    title: "Mobile App",
    description:
      "iOS and Android apps that users love — smooth, intuitive, and built for performance.",
    icon: Smartphone,
  },

  {
    title: "E-Commerce",
    description:
      "Full-featured online stores with seamless checkout, inventory management, and payment integration.",
    icon: ShoppingCart,
  },

  {
    title: "SEO",
    description:
      "Data-driven SEO strategies that push your website to the top of Google and drive organic traffic.",
    icon: Search,
  },

  {
    title: "SQA",
    description:
      "Rigorous software quality assurance — manual and automated testing to ensure zero-defect releases.",
    icon: TestTube,
  },
];