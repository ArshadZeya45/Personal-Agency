import { ServiceData } from "@/types/admin-services";
import {CodeXml } from "lucide-react";

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
    title: "Beyond Just a Website",
    highlightedText: "Website",

    description:
      "In today's digital landscape, a slow or clunky website directly results in lost revenue. We build custom web solutions that act as the primary growth engine for your business.",

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
      },

      {
        title: "Mobile-First Approach",
        description:
          "Your website performs flawlessly on every screen size.",
        color: "green",
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",
    title: "What We Build",
    highlightedText: "Build",

    description:
      "From visual interfaces to deep database logic, we cover the entire web spectrum.",

    items: [
      {
        title: "Frontend Development",
        description:
          "Interactive React, Next.js and Vue applications.",
        color: "cyan",
      },

      {
        title: "Backend Engineering",
        description:
          "Node.js, Express, APIs and scalable architectures.",
        color: "blue",
      },

      {
        title: "Full-Stack Web Apps",
        description:
          "End-to-end SaaS and enterprise applications.",
        color: "purple",
      },

      {
        title: "CMS Development",
        description:
          "WordPress, Headless CMS and custom admin panels.",
        color: "green",
      },

      {
        title: "E-Commerce Solutions",
        description:
          "Shopify, WooCommerce and custom stores.",
        color: "orange",
      },

      {
        title: "Maintenance & Support",
        description:
          "Ongoing monitoring and optimization.",
        color: "yellow",
      },
    ],
  },

  technologies: {
    badge: "OUR ARSENAL",
    title: "The Technologies",
    highlightedText: "We Master",

    items: [
      "React.js",
      "Angular",
      "Vue.js",
      "Node.js",
      "Python",
      "Laravel",
      "SQL/NoSQL",
      "AWS Cloud",
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