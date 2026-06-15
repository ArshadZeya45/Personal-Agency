import { FooterData } from "@/types/footer";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export const footerData: FooterData = {
  brand: {
    description:
      "Your all-in-one digital partner. We build, grow, and scale your business in the digital world.",
  },

  sections: [
    {
      title: "Services",
      links: [
        {
          title: "Web Development",
          href: "/service-web-development",
        },
        {
          title: "Mobile Apps",
          href: "/service-app-development",
        },
        {
          title: "E-Commerce",
          href: "/service-ecommerce",
        },
        {
          title: "SEO",
          href: "/service-seo",
        },
        {
          title: "UI/UX Design",
          href: "/service-ui-ux",
        },
      ],
    },

    {
      title: "Company",
      links: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Success Stories",
          href: "/success-stories",
        },
        {
          title: "Hire Experts",
          href: "/hire-experts",
        },
        {
          title: "Careers",
          href: "/career",
        },
        {
          title: "Contact Us",
          href: "/contact",
        },
      ],
    },

    {
      title: "Portfolio",
      links: [
        {
          title: "Web Design",
          href: "/portfolio/web-design",
        },
        {
          title: "Web Apps",
          href: "/portfolio/web-apps",
        },
        {
          title: "Mobile Apps",
          href: "/portfolio/mobile-apps",
        },
        {
          title: "E-Commerce",
          href: "/portfolio/ecommerce",
        },
        {
          title: "SEO Campaigns",
          href: "/portfolio/seo-campaigns",
        },
      ],
    },
  ],

  socials: [
    {
      name: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
  ],
};