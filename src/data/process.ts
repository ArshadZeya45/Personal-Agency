import { Globe , Workflow , Paintbrush , Code2 , Server } from "lucide-react";
import { ProcessPipeline, ProcessStep } from "@/types/process";

export const webPipeline : ProcessPipeline = {
  title: "Web App Pipeline",
  subtitle: "Fast. Scalable. Pixel-Perfect.",
  icon: Globe,

  stages: [
    {
      title: "PLANNING",
      icon: Workflow,
      active: true,
    },

    {
      title: "DESIGN",
      icon: Paintbrush,
    },

    {
      title: "DEVELOP",
      icon: Code2,
    },

    {
      title: "DEPLOY",
      icon: Server,
    },
  ],

  logs: [
    {
      title: "Frontend components merged to main",
      time: "2m ago",
      color: "cyan",
    },

    {
      title: "Core Web Vitals — all green",
      time: "20m ago",
      color: "green",
      isBlur : true
    },

    {
      title: "API integration tests passed",
      time: "1h ago",
      color: "purple",
      isBlur : true
    },
  ],
};





export const webProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Architecture",
    description:
      "We map out the user journey, define the technical stack, and architect the database schema before writing a single line of code.",
  },

  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Our UI/UX team creates high-fidelity Figma prototypes, ensuring the interface aligns perfectly with your brand identity.",
  },

  {
    id: 3,
    title: "Agile Sprints",
    description:
      "Code is written in two-week sprints. You receive regular staging links to see progress in real-time and provide feedback.",
  },

  {
    id: 4,
    title: "Deployment & Scale",
    description:
      "Following rigorous QA testing, we deploy to scalable cloud infrastructure, ensuring zero downtime and immediate readiness.",
  },
];