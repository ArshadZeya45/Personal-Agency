import { ServiceData } from "@/types/admin-services";
import { Blocks, FolderCode, UserKey } from "lucide-react";
import { FaBuilding, FaCloudUploadAlt, FaPlug, FaRobot } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { RiLoader3Fill } from "react-icons/ri";

export const customSoftwareDevelopmentData: ServiceData = {
  slug: "software-development",

  hero: {
    badge: {
      text : "ENTERPRISE ENGINEERING",
      icon : FolderCode
    },
    title : {normal :"Custom Software" , highlighted : "Development"},

    description:
      "We architect enterprise-grade software, complex SaaS platforms, and bespoke business tools designed to scale securely and automate your core operations.",

    button: {
      text: "Discuss Your Project",
      href: "/contact",
    },
  },

  stats: [
    {
      value: "$50M+",
      label: "OPERATIONAL COSTS SAVED",
    },
    {
      value: "99.99%",
      label: "SYSTEM UPTIME",
    },
    {
      value: "SOC2",
      label: "SECURITY COMPLIANCE",
    },
    {
      value: "100%",
      label: "SCALABLE ARCHITECTURES",
    },
  ],

  overview: {
    badge: "OVERVIEW",

    title: "Move Beyond",

    highlightedText: "Off-The-Shelf",

    description:
      "Off-the-shelf software forces your business to adapt to its limitations. We engineer tailor-made ERP, CRM, SaaS and internal business systems that automate operations, eliminate repetitive work, and scale as your company grows.",

    points: [
      "Total Ownership of Source Code & IP",
      "Microservices & Cloud-Native Architectures",
      "Bank-Level Data Encryption & Compliance",
    ],

    cards: [
      {
        title: "Enterprise Security",

        description:
          "Role-based access control, encryption, audit logs and compliance-ready architectures built for enterprise environments.",

        color: "blue",
        icon : UserKey
      },

      {
        title: "Seamless Integration",

        description:
          "Connect your software with ERPs, CRMs, payment gateways, accounting systems and third-party APIs.",

        color: "green",
        icon : Blocks
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",

    title: "What We",

    highlightedText: "Engineer",

    description:
      "Enterprise software solutions engineered to solve complex operational challenges and accelerate business growth.",

    items: [
      {
        title: "Enterprise ERP Systems",

        description:
          "Centralized inventory, HR, finance and supply-chain management platforms.",

        color: "blue",
        icon : FaBuilding
      },

      {
        title: "Custom CRM Platforms",

        description:
          "Sales, customer relationship and workflow management systems tailored to your business.",

        color: "green",
        icon : IoPeople
      },

      {
        title: "SaaS Product Development",

        description:
          "Cloud-native multi-tenant SaaS products built for scale and recurring revenue.",

        color: "cyan",
        icon : FaCloudUploadAlt
      },

      {
        title: "Workflow Automation",

        description:
          "Replace repetitive manual processes with intelligent automated business workflows.",

        color: "purple",
        icon : FaPlug
      },

      {
        title: "Legacy System Modernization",

        description:
          "Upgrade legacy applications with modern scalable architectures without data loss.",

        color: "orange",
        icon : RiLoader3Fill
      },

      {
        title: "AI Business Automation",

        description:
          "Integrate AI assistants, analytics and automation into existing enterprise software.",

        color: "yellow",
        icon : FaRobot
      },
    ],
  },

  technologies: {
    badge: "ENTERPRISE ARSENAL",

    title: "The",

    highlightedText: "Tech Stack",

    items: [
      "Python / Django",
      "Node.js / Express",
      "Java / Spring",
      "C# / .NET Core",
      "PostgreSQL",
      "Docker / Kubernetes",
      "AWS Infrastructure",
      "OAuth / JWT",
    ],
  },

  process: {
    badge: "METHODOLOGY",

    title: "How We Build",

    highlightedText: "Scalable Systems",

    description:
      "Complex software requires structured engineering. Our agile workflow minimizes risk while ensuring enterprise-grade quality.",

    // steps: [
    //   {
    //     number: 1,

    //     title: "Discovery & Blueprinting",

    //     description:
    //       "Analyze business processes, identify bottlenecks and design scalable software architecture.",
    //   },

    //   {
    //     number: 2,

    //     title: "System Architecture",

    //     description:
    //       "Design databases, APIs, infrastructure and security models before development begins.",
    //   },

    //   {
    //     number: 3,

    //     title: "Agile Engineering",

    //     description:
    //       "Develop software in iterative sprints with continuous testing and stakeholder feedback.",
    //   },

    //   {
    //     number: 4,

    //     title: "Deployment & Handover",

    //     description:
    //       "Cloud deployment, monitoring, documentation, training and long-term maintenance.",
    //   },
    // ],
  },

  faq: {
    badge: "QUESTIONS?",

    title: "Frequently Asked",

    highlightedText: "Questions",

    items: [
      {
        question:
          "Why choose custom software over off-the-shelf solutions?",

        answer:
          "Custom software is built specifically for your workflows, giving you greater flexibility, scalability, ownership and long-term cost savings.",
      },

      {
        question:
          "How long does it take to build custom enterprise software?",

        answer:
          "Depending on complexity, projects typically range from 8 weeks for MVPs to several months for enterprise-grade systems.",
      },

      {
        question:
          "Will my data be secure and compliant?",

        answer:
          "Yes. We implement enterprise security practices including encryption, authentication, RBAC, audit logging and compliance-ready architectures.",
      },
    ],
  },
};