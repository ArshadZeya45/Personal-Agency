import { ChartNoAxesCombined, ChevronDown, Hash, Laptop, Mail, Megaphone, Paintbrush, PencilRuler, Search, ShoppingCart, Target } from "lucide-react";
import {
  Code,
  Smartphone,
  Cog,
  Bug,
  GraduationCap,
  Brain,
  Cloud,
  Monitor,
  PenTool,
  Video,
  Palette,
} from "lucide-react";
import { DesktopMenuItem } from "@/types/navbar";

export const desktopMenus: DesktopMenuItem[] = [
  {
    title: "IT Services",
    type: "mega",
    icon: ChevronDown,

    sections: [
      {
        label: "Development",

        items: [
          {
            title: "Web Development",
            description: "Custom websites & apps",
            href: "/services/web-development",
            icon: Code,
          },

          {
            title: "Mobile Apps",
            description: "iOS & Android",
            href: "/services/app-development",
            icon: Smartphone,
          },

          {
            title: "Custom Software",
            description: "Business solutions",
            href: "/services/software-development",
            icon: Cog,
          },

          // {
          //   title: "SQA & Testing",
          //   description: "Manual & automated testing",
          //   href: "/service-sqa",
          //   icon: Bug,
          // },

          {
            title: "LMS Development",
            description: "Custom e-learning platforms",
            href: "/services/lms",
            icon: GraduationCap,
          },

          // {
          //   title: "AI & ML",
          //   description: "Intelligent automation",
          //   href: "/service-ai-ml",
          //   icon: Brain,
          // },

          // {
          //   title: "Cloud & DevOps",
          //   description: "Scalable infrastructure",
          //   href: "/service-cloud-devops",
          //   icon: Cloud,
          // },
        ],
      },

      {
        label: "Design & Intelligence",

        items: [
          {
            title: "Web Design",
            description: "Pixel-perfect interfaces",
            href: "/services/web-design",
            icon: Monitor,
          },

          // {
          //   title: "Graphic Designing",
          //   description: "Brand identity & creatives",
          //   href: "/service-graphic-design",
          //   icon: PenTool,
          // },

          {
            title: "Video Editing",
            description: "Motion graphics & reels",
            href: "/services/video-editing",
            icon: Video,
          },

          // {
          //   title: "UI/UX Design",
          //   description: "User-centered design",
          //   href: "/service-ui-ux",
          //   icon: Palette,
          // },
        ],
      },
    ],
  },
  {
  title: "Digital Marketing",
  type: "mega",
  icon: ChevronDown,

  sections: [
    {
      label: "Organic Growth",

      items: [
        {
          title: "SEO Services",
          description: "Rank higher, grow organically",
          href: "/service-seo",
          icon: Search,
        },

        {
          title: "E-Commerce",
          description: "Shopify & custom stores",
          href: "/service-ecommerce",
          icon: ShoppingCart,
        },

        // {
        //   title: "Content Marketing",
        //   description: "Strategy & writing",
        //   href: "/service-content-marketing",
        //   icon: PenTool,
        // },
      ],
    },

    {
      label: "Paid & Social",

      items: [
        // {
        //   title: "Social Media",
        //   description: "Build brand & engage",
        //   href: "/service-social-media",
        //   icon: Hash,
        // },

        // {
        //   title: "PPC Advertising",
        //   description: "Google & Meta ads",
        //   href: "/service-ppc",
        //   icon: Target,
        // },

        {
          title: "Email Marketing",
          description: "Campaigns that convert",
          href: "/service-email-marketing",
          icon: Mail,
        },
      ],
    },
  ],
},
//   {
//   title: "Hire Experts",
//   type: "mega",
//   icon: ChevronDown,

//   sections: [
//     {
//       label: "Our Talent Pool",

//       items: [
//         {
//           title: "Hire Web Developers",
//           description: "Full-stack & frontend",
//           href: "/hire-web-developers",
//           icon: Laptop,
//         },

//         {
//           title: "Hire App Developers",
//           description: "iOS & Android",
//           href: "/hire-app-developers",
//           icon: Smartphone,
//         },

//         {
//           title: "Hire UI/UX Designers",
//           description: "UI/UX & Graphics",
//           href: "/hire-ui-ux-designers",
//           icon: PencilRuler,
//         },

//         {
//           title: "Hire Graphic Designers",
//           description: "Branding & Visuals",
//           href: "/hire-graphic-designers",
//           icon: Paintbrush,
//         },
//       ],
//     },

//     {
//       label: "Hire Experts",

//       items: [
//         {
//           title: "Hire SEO Experts",
//           description: "Ranking specialists",
//           href: "/hire-seo-experts",
//           icon: ChartNoAxesCombined,
//         },

//         {
//           title: "Hire QA Engineers",
//           description: "Manual & Automation",
//           href: "/hire-qa-engineers",
//           icon: Bug,
//         },

//         {
//           title: "Hire Marketers",
//           description: "PPC & Growth experts",
//           href: "/hire-digital-marketers",
//           icon: Megaphone,
//         },

//         {
//           title: "Hire Writers",
//           description: "SEO & Copywriting",
//           href: "/hire-content-writers",
//           icon: PenTool,
//         },
//       ],
//     },
//   ],
// },
  
 {
  title: "Success Stories",
  type: "mega",
  icon: ChevronDown,

  sections: [
    {
      label: "Browse By Category",

      items: [
        {
          title: "All Projects",
          href: "/success-stories",
        },
        {
          title: "Digital Marketing",
          href: "/digital-marketing-success-stories",
        },
        {
          title: "Web Applications",
          href: "/web-applications-success-stories",
        },
        {
          title: "Mobile Apps",
          href: "/mobile-applications-success-stories",
        },
        {
          title: "E-Commerce",
          href: "/ecommerce-success-stories",
        },
        // {
        //   title: "UI/UX Design",
        //   href: "/ui-ux-success-stories",
        // },
        {
          title: "SEO Campaigns",
          href: "/seo-campaigns-success-stories",
        },
      ],
    },
  ],
},
  {
    title: "About Us",
    href: "/about",
  },
  // {
  //   title: "Career",
  //   href: "/career",
  // },
];