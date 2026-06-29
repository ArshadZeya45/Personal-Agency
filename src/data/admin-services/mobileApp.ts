import { ServiceData } from "@/types/admin-services";
import { TabletSmartphone } from "lucide-react";

export const mobileAppDevelopmentData: ServiceData = {
  slug: "app-development",

  hero: {

    badge: {
      text : "IOS & ANDROID ENGINEERING",
      icon : TabletSmartphone
    },
    title: {normal :"Mobile App" , highlighted : "Development"},
    description: "We design and engineer high-performance native and cross-platform mobile applications. Build products that capture your audience and dominate the app stores.",
    button: {
      text: "Start Your Project",
      href: "Discuss Your App Idea"
    }
    

    
      

    
  },

  stats: [
    {
      value: "4.8",
      label: "AVG. APP STORE RATING",
    },
    {
      value: "99.9%",
      label: "CRASH-FREE SESSIONS",
    },
    {
      value: "15M+",
      label: "TOTAL DOWNLOADS",
    },
    {
      value: "+45%",
      label: "AVG. DAY-30 RETENTION",
    },
  ],

  overview: {
    badge: "OVERVIEW",

    title: "Beyond Just a",

    highlightedText: "Mobile App",

    description:
      "Building an app is easy. Building an app users actually keep on their phone is incredibly hard. Our engineers create scalable, secure and high-performance mobile applications that deliver exceptional user experiences across every device.",

    points: [
      "Strict Apple HIG & Material Design Compliance",
      "Secure Biometric Auth & Offline Capabilities",
      "App Store Submission & Compliance Handled",
    ],

    cards: [
      {
        title: "Fast & Fluid Performance",

        description:
          "We optimize rendering, memory usage and animations to ensure buttery-smooth mobile experiences.",

        color: "blue",
      },

      {
        title: "Offline-First Architecture",

        description:
          "Build apps that continue working seamlessly even when users temporarily lose internet connectivity.",

        color: "green",
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED EXPERTISE",

    title: "What We",

    highlightedText: "Develop",

    description:
      "From native mobile experiences to enterprise-grade cross-platform applications, we build solutions that scale.",

    items: [
      {
        title: "Native iOS Apps",

        description:
          "Swift-powered iPhone & iPad applications optimized for the Apple ecosystem.",

        color: "cyan",
      },

      {
        title: "Native Android Apps",

        description:
          "Modern Kotlin applications engineered for performance and reliability.",

        color: "green",
      },

      {
        title: "Cross-Platform Apps",

        description:
          "React Native & Flutter applications sharing one codebase across platforms.",

        color: "blue",
      },

      {
        title: "UI/UX Design",

        description:
          "Beautiful mobile interfaces focused on usability and engagement.",

        color: "purple",
      },

      {
        title: "Backend Integration",

        description:
          "Secure APIs, authentication, notifications and cloud synchronization.",

        color: "orange",
      },

      {
        title: "Maintenance & Growth",

        description:
          "Continuous improvements, monitoring and feature expansion after launch.",

        color: "yellow",
      },
    ],
  },

  technologies: {
    badge: "OUR ARSENAL",

    title: "Mobile",

    highlightedText: "Technologies",

    items: [
      "Swift / iOS",
      "Kotlin / Android",
      "React Native",
      "Flutter / Dart",
      "Firebase",
      "CoreData / SQLite",
      "AWS Mobile",
      "Fastlane CI/CD",
    ],
  },

  process: {
    badge: "METHODOLOGY",

    title: "How We Build",

    highlightedText: "Better Apps",

    description:
      "Our agile mobile development workflow ensures every release is stable, scalable and ready for production.",

    // steps: [
    //   {
    //     number: 1,
    //     title: "UX Flow & Prototyping",

    //     description:
    //       "We map user journeys and create interactive prototypes before writing production code.",
    //   },

    //   {
    //     number: 2,
    //     title: "API & Backend Setup",

    //     description:
    //       "Build secure cloud architecture, authentication and scalable APIs.",
    //   },

    //   {
    //     number: 3,
    //     title: "Sprint Development & Testing",

    //     description:
    //       "Develop in agile sprints with continuous testing across multiple devices.",
    //   },

    //   {
    //     number: 4,
    //     title: "Store Launch & Optimization",

    //     description:
    //       "Deploy to the App Store & Google Play with ASO and ongoing monitoring.",
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
          "Should I choose Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native)?",

        answer:
          "It depends on your business goals, budget and performance requirements. We help you select the best technology stack before development begins.",
      },

      {
        question: "Do you handle the App Store submission process?",

        answer:
          "Yes. We manage App Store and Google Play submission, review compliance, publishing and updates.",
      },

      {
        question: "Do you provide ongoing maintenance after launch?",

        answer:
          "Absolutely. We provide long-term maintenance, feature upgrades, performance optimization and monitoring.",
      },
    ],
  },
};