import { ServiceData } from "@/types/admin-services";
import { BadgeCheck, Laptop, Smartphone } from "lucide-react";
import { FaBuilding, FaMagic, FaRocket, FaSearch, FaShoppingBag } from "react-icons/fa";
import { SiCodeblocks } from "react-icons/si";

export const webDesignData: ServiceData = {
  slug: "web-design",

  hero: {
    badge: {
        text : "PIXEL-PERFECT INTERFACES",
        icon : Laptop
    },
    title: {normal : "Custom" , highlighted : "Web Design"},
    description:
      "We design beautiful, responsive, and conversion-focused websites that strengthen your brand identity and turn visitors into customers.",
    button: {
      text: "Design Your Website",
      href: "",
    },
  },

  stats: [
    {
      value: "100%",
      label: "MOBILE RESPONSIVE",
    },
    {
      value: "+65%",
      label: "AVG. CONVERSION LIFT",
    },
    {
      value: "WCAG",
      label: "ACCESSIBILITY COMPLIANT",
    },
    {
      value: "2.5s",
      label: "ATTENTION CAPTURE",
    },
  ],

  overview: {
    badge: "OVERVIEW",
    title: "Design That Drives",
    highlightedText: "Action",

    description:
      "Your website has only a few seconds to impress visitors. We create visually engaging, user-friendly interfaces that build trust, improve usability, and maximize conversions.",

    points: [
      "Custom Visual Branding & UI Design",
      "Advanced CSS & Micro-Interactions",
      "Developer-Ready Figma Handoffs",
    ],

    cards: [
      {
        title: "Responsive by Nature",
        description:
          "Every layout is optimized for desktop, tablet, and mobile devices to ensure a seamless experience.",
        color: "blue",
        icon : Smartphone
      },
      {
        title: "Conversion-Focused",
        description:
          "Strategic layouts, typography, and call-to-actions designed to increase user engagement.",
        color: "green",
        icon : BadgeCheck
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",
    title: "What We",
    highlightedText: "Design",

    description:
      "Modern UI/UX solutions crafted for businesses, startups, and enterprise products.",

    items: [
      {
        title: "Corporate Websites",
        description:
          "Professional websites that establish credibility and trust.",
        color: "cyan",
        icon : FaBuilding
      },
      {
        title: "Landing Pages",
        description:
          "High-converting landing pages optimized for marketing campaigns.",
        color: "blue",
        icon : FaRocket
      },
      {
        title: "E-Commerce Interfaces",
        description:
          "Beautiful shopping experiences that increase customer confidence.",
        color: "orange",
        icon : FaShoppingBag
      },
      {
        title: "SaaS Dashboard UI",
        description:
          "Modern dashboards with intuitive workflows and data visualization.",
        color: "purple",
        icon : SiCodeblocks
      },
      {
        title: "Interactive Experiences",
        description:
          "Creative animations and engaging user interactions.",
        color: "green",
        icon : FaMagic
      },
      {
        title: "Website Redesign",
        description:
          "Refresh outdated websites with modern UI and improved usability.",
        color: "yellow",
        icon : FaSearch
      },
    ],
  },

  technologies: {
    badge: "OUR ARSENAL",
    title: "The Design",
    highlightedText: "Stack",

    items: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Sketch",
      "HTML5 / CSS3",
      "JavaScript",
      "Webflow",
      "WCAG Tools",
    ],
  },

  process: {
    badge: "METHODOLOGY",
    title: "How We Design",
    highlightedText: "Success",

    description:
      "Our collaborative design workflow ensures every interface is visually stunning, intuitive, and ready for development.",
  },

  faq: {
    badge: "QUESTIONS?",
    title: "Frequently Asked",
    highlightedText: "Questions",

    items: [
      {
        question:
          "What is the difference between Web Design and Web Development?",

        answer:
          "Web design focuses on the visual experience and user interface, while web development turns those designs into a fully functional website.",
      },

      {
        question:
          "Will my design work on mobile phones?",

        answer:
          "Yes. Every design follows a responsive-first approach and is optimized for desktops, tablets, and smartphones.",
      },

      {
        question:
          "Do you provide only design files or complete development as well?",

        answer:
          "We offer both. You can receive editable Figma files, or we can develop the complete website using modern technologies like React and Next.js.",
      },
    ],
  },
};