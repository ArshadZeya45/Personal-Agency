import { ServiceData } from "@/types/admin-services";
import { AudioLines, Eye, Video } from "lucide-react";

export const videoEditingData: ServiceData = {
  slug: "video-editing",

  hero: {
    badge: {
        text : "POST-PRODUCTION & VFX",
        icon : Video
    },
    title: {normal : "Professional" , highlighted : "Video Editing"},
    description:
      "We transform raw footage into cinematic, scroll-stopping videos that captivate audiences, strengthen your brand, and maximize engagement across every platform.",
    button: {
      text: "Elevate Your Content",
      href: "",
    },
  },

  stats: [
    {
      value: "10M+",
      label: "VIEWS GENERATED",
    },
    {
      value: "4K/8K",
      label: "CINEMATIC RENDERING",
    },
    {
      value: "+60%",
      label: "AUDIENCE RETENTION",
    },
    {
      value: "100%",
      label: "CUSTOM MOTION GRAPHICS",
    },
  ],

  overview: {
    badge: "OVERVIEW",
    title: "Beyond Just Cutting",
    highlightedText: "Clips",

    description:
      "Modern video editing is more than trimming footage. We craft compelling stories using cinematic pacing, sound design, motion graphics, and visual effects that keep viewers engaged from the first second to the final frame.",

    points: [
      "Hollywood-Grade Color Grading",
      "Professional Audio Mixing & Cleanup",
      "Algorithm-Optimized Video Pacing",
    ],

    cards: [
      {
        title: "Engineered for Retention",
        description:
          "Pattern interrupts, dynamic zooms, subtitles, and visual storytelling designed to maximize watch time.",
        color: "blue",
        icon : Eye
      },

      {
        title: "Immersive Audio",
        description:
          "Professional sound design, royalty-free music, dialogue cleanup, and cinematic audio enhancement.",
        color: "purple",
        icon : AudioLines
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",
    title: "What We",
    highlightedText: "Produce",

    description:
      "Professional editing services for creators, businesses, agencies, and brands across every platform.",

    items: [
      {
        title: "Short-Form Content",
        description:
          "Reels, TikTok, Shorts, and viral social media videos optimized for engagement.",
        color: "blue",
      },

      {
        title: "YouTube Video Editing",
        description:
          "Long-form YouTube videos with B-roll, transitions, subtitles, and storytelling.",
        color: "orange",
      },

      {
        title: "Motion Graphics & Animation",
        description:
          "Custom intros, logo animations, explainer graphics, and animated typography.",
        color: "purple",
      },

      {
        title: "Corporate Videos",
        description:
          "Professional company profiles, interviews, presentations, and promotional videos.",
        color: "green",
      },

      {
        title: "Color Grading & VFX",
        description:
          "Cinematic color correction, visual effects, compositing, and premium finishing.",
        color: "cyan",
      },

      {
        title: "Advertisement Videos",
        description:
          "Facebook, Instagram, and Google Ads optimized to maximize conversions.",
        color: "yellow",
      },
    ],
  },

  technologies: {
    badge: "OUR ARSENAL",
    title: "The Post-Production",
    highlightedText: "Stack",

    items: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Adobe Audition",
      "Final Cut Pro",
      "Cinema 4D",
      "CapCut Pro",
      "Adobe Illustrator",
    ],
  },

  process: {
    badge: "METHODOLOGY",
    title: "How We Edit For",
    highlightedText: "Impact",

    description:
      "Our streamlined post-production workflow ensures every video is polished, engaging, and delivered on time.",
  },

  faq: {
    badge: "QUESTIONS?",
    title: "Frequently Asked",
    highlightedText: "Questions",

    items: [
      {
        question: "How do I send you my raw footage?",

        answer:
          "You can securely upload your files through Google Drive, Dropbox, WeTransfer, or any cloud storage platform. We'll handle the rest.",
      },

      {
        question: "What is the typical turnaround time for a video?",

        answer:
          "Most projects are completed within 2–7 business days depending on video length, complexity, and revision requirements.",
      },

      {
        question: "Do you provide stock footage and background music?",

        answer:
          "Yes. We provide premium royalty-free stock footage, sound effects, and licensed background music whenever your project requires them.",
      },
    ],
  },
};