import { ServiceData } from "@/types/admin-services";
import { Gamepad2, GlobeLock, GraduationCap } from "lucide-react";
import { FaChartPie, FaMedal, FaSchool, FaShoppingCart, FaVideo } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export const lmsDevelopmentData: ServiceData = {
  slug: "lms",

  hero: {
    badge: {
      text : "E-LEARNING SOLUTIONS",
      icon : GraduationCap
    },

    title: {normal : "Custom LMS", highlighted :  "Development"},


    description:
      "Empower your workforce and students with scalable, engaging, and highly secure e-learning platforms. We build bespoke Learning Management Systems that you completely own.",

    button: {
      text: "Discuss Your Platform",
      href: "/contact",
    },
  },

  stats: [
    {
      value: "1M+",
      label: "ACTIVE LEARNERS HOSTED",
    },
    {
      value: "99.9%",
      label: "VIDEO STREAMING UPTIME",
    },
    {
      value: "SCORM",
      label: "FULLY COMPLIANT ARCHITECTURE",
    },
    {
      value: "100%",
      label: "CUSTOM IP OWNERSHIP",
    },
  ],

  overview: {
    badge: "OVERVIEW",

    title: "Move Beyond Clunky",

    highlightedText: "E-Learning",

    description:
      "Off-the-shelf LMS platforms like Moodle or Canvas often suffer from rigid user interfaces, limited customization, and expensive licensing. We develop enterprise-grade Learning Management Systems tailored to your curriculum, branding, and business workflows.",

    points: [
      "Total Ownership of Source Code & IP",
      "Seamless Integration with Existing HR/ERPs",
      "Robust SCORM & xAPI Compliance",
    ],

    cards: [
      {
        title: "Enterprise-Grade Security",

        description:
          "Bank-level encryption, RBAC, DRM protection and secure cloud infrastructure keep your educational content and learner data protected.",

        color: "blue",
        icon : GlobeLock
      },

      {
        title: "High Learner Engagement",

        description:
          "Gamification, quizzes, certificates, discussion forums and interactive learning experiences improve completion rates.",

        color: "green",
        icon : Gamepad2
      },
    ],
  },

  solutions: {
    badge: "SPECIALIZED SOLUTIONS",

    title: "What We",

    highlightedText: "Engineer",

    description:
      "Comprehensive e-learning platforms designed for education providers, enterprises, coaches and online academies.",

    items: [
      {
        title: "Corporate Training Portals",

        description:
          "Employee onboarding, compliance training, certifications and workforce upskilling platforms.",

        color: "blue",
        icon : HiOutlineOfficeBuilding
      },

      {
        title: "K-12 & Higher Education",

        description:
          "Virtual classrooms, assignments, grading systems, attendance and parent-teacher portals.",

        color: "green",
        icon : FaSchool
      },

      {
        title: "Course Marketplace",

        description:
          "Build your own Udemy-style learning platform with subscriptions, coupons and secure payments.",

        color: "orange",
        icon : FaShoppingCart
      },

      {
        title: "Live Learning Platforms",

        description:
          "Interactive live classes powered by WebRTC, Zoom integration and collaborative whiteboards.",

        color: "purple",
        icon : FaVideo
      },

      {
        title: "Certification Systems",

        description:
          "Generate verifiable certificates, badges and skill assessments after successful course completion.",

        color: "cyan",
        icon : FaMedal
      },

      {
        title: "Learning Analytics",

        description:
          "Track learner progress, engagement, completion rates and performance through detailed dashboards.",

        color: "yellow",
        icon : FaChartPie
      },
    ],
  },

  technologies: {
    badge: "ENTERPRISE ARSENAL",

    title: "The E-Learning",

    highlightedText: "Stack",

    items: [
      "Django / Python",
      "Node.js",
      "React.js",
      "WebRTC",
      "PostgreSQL",
      "AWS S3 (Video)",
      "SCORM / xAPI",
      "Stripe API",
    ],
  },

  process: {
    badge: "METHODOLOGY",

    title: "How We Build",

    highlightedText: "Scalable EdTech",

    description:
      "Our proven development lifecycle ensures high performance, scalability and engaging learning experiences for every platform.",

    // steps: [
    //   {
    //     number: 1,

    //     title: "Requirements & Curriculum Mapping",

    //     description:
    //       "Understand learning objectives, user roles, integrations and curriculum structure before development begins.",
    //   },

    //   {
    //     number: 2,

    //     title: "UX/UI Design & Prototyping",

    //     description:
    //       "Design distraction-free learning interfaces that maximize learner engagement across all devices.",
    //   },

    //   {
    //     number: 3,

    //     title: "Agile Development & Integrations",

    //     description:
    //       "Develop scalable LMS modules including video streaming, quizzes, payments and SCORM compatibility.",
    //   },

    //   {
    //     number: 4,

    //     title: "Load Testing & Deployment",

    //     description:
    //       "Stress-test the platform for thousands of concurrent learners before secure cloud deployment.",
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
          "Why choose a custom LMS over Moodle, Canvas, or Thinkific?",

        answer:
          "A custom LMS gives you complete ownership, unlimited customization, better branding, seamless integrations, and eliminates expensive recurring licensing fees charged by hosted platforms.",
      },

      {
        question: "Will the LMS be SCORM or xAPI compliant?",

        answer:
          "Yes. We build learning platforms with full SCORM and xAPI compatibility, making them compatible with industry-standard learning content and tracking systems.",
      },

      {
        question:
          "Can the LMS integrate with our existing HR/CRM software?",

        answer:
          "Absolutely. We integrate LMS platforms with HRMS, CRM, ERP, payment gateways, email platforms, SSO providers and other third-party business tools.",
      },
    ],
  },
};