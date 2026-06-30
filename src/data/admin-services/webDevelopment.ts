import { ServiceData } from "@/types/admin-services";
import {CodeXml, Smartphone, SquareCode } from "lucide-react";
import { CgDatabase } from "react-icons/cg";
import { FaLaptopCode, FaReact, FaShoppingCart, FaWordpress } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { FaAngular, FaVuejs, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiLaravel, SiMysql } from "react-icons/si";

export const webDevelopmentData:ServiceData = {
  slug: "web-development",

  hero: {
    badge: {
      text : "WEB ENGINEERING",
      icon : CodeXml 
    },
    title: {normal : "Custom Web" , highlighted : "Development"},
    description: "We engineer scalable, high-performance websites and complex web applications tailored to your exact business logic.",
    button: {
      text: "Start Your Project",
      href: ""
    }
  },

  stats: [
    {
      value: "0.8s",
      label: "AVG. PAGE LOAD TIME",
    },
    {
      value: "99.9%",
      label: "UPTIME GUARANTEED",
    },
    {
      value: "100%",
      label: "RESPONSIVE DESIGN",
    },
    {
      value: "100/100",
      label: "CORE WEB VITALS",
    },
  ],

  overview: {
    badge: "OVERVIEW",
    title: "Beyond Just a ",
    highlightedText: "Website",

    description:
      "In today's digital landscape, a slow or clunky website directly results in lost revenue. We build custom web solutions that act as the primary growth engine for your business. Whether you need a corporate web presence or a highly complex SaaS application, our full-stack engineers have you covered.",

    points: [
      "Enterprise-Grade Security Architecture",
      "Lightning-Fast Next.js & React Frontends",
      "Custom API Development & Third-Party Integrations",
    ],

    cards: [
      {
        title: "Built for Speed",
        description:
          "We optimize server response times, compress assets, and utilize modern caching strategies.",
        color: "blue",
        icon : SquareCode
      },

      {
        title: "Mobile-First Approach",
        description:
          "Your website performs flawlessly on every screen size.",
        color: "green",
        icon : Smartphone
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",
    title: "What We",
    highlightedText: "Build",

    description:
      "From visual interfaces to deep database logic, we cover the entire web spectrum.",

    items: [
      {
        title: "Frontend Development",
        description:
          "Interactive React, Next.js and Vue applications.",
        color: "cyan",
        icon : FaReact
      },

      {
        title: "Backend Engineering",
        description:
          "Node.js, Express, APIs and scalable architectures.",
        color: "blue",
        icon: CgDatabase
      },

      {
        title: "Full-Stack Web Apps",
        description:
          "End-to-end SaaS and enterprise applications.",
        color: "purple",
        icon : FaLaptopCode
      },

      {
        title: "CMS Development",
        description:
          "WordPress, Headless CMS and custom admin panels.",
        color: "green",
        icon : FaWordpress
      },

      {
        title: "E-Commerce Solutions",
        description:
          "Shopify, WooCommerce and custom stores.",
        color: "orange",
        icon : FaShoppingCart
      },

      {
        title: "Maintenance & Support",
        description:
          "Ongoing monitoring and optimization.",
        color: "yellow",
        icon : FiTool
      },
    ],
  },

  technologies: {
    badge: "OUR ARSENAL",
    title: "The Technologies",
    highlightedText: "We Master",

     items: [
    {
      title: "React.js",
      icon: FaReact,
    },
    {
      title: "Angular",
      icon: FaAngular,
    },
    {
      title: "Vue.js",
      icon: FaVuejs,
    },
    {
      title: "Node.js",
      icon: FaNodeJs,
    },
    {
      title: "Python",
      icon: FaPython,
    },
    {
      title: "Laravel",
      icon: SiLaravel,
    },
    {
      title: "SQL/NoSQL",
      icon: SiMysql,
    },
    {
      title: "AWS Cloud",
      icon: FaAws,
    },
  ],
  },

  process: {
    badge: "METHODOLOGY",
    title: "How We Build",
    highlightedText: "Better Web Apps",

    description:
      "We follow a strict agile software engineering lifecycle.",

    
  },

  faq: {
    badge: "QUESTIONS?",
    title: "Frequently Asked",
    highlightedText: "Questions",

    items: [
      {
        question:
          "Do you use templates for web development?",

        answer:
          "No, we specialize in custom web development.",
      },

      {
        question:
          "Will my website be mobile-friendly and optimized for SEO?",

        answer:
          "Absolutely. Every project is mobile-first and SEO-ready.",
      },

      {
        question:
          "Can you take over and fix an existing web application?",

        answer:
          "Yes. We frequently audit, optimize and rebuild existing applications.",
      },
    ],
  },
};