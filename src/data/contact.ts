import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import { FaInstagram , FaLinkedin , FaFacebook } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Headquarters",
    value: "Karachi, Sindh, Pakistan",
    icon: MapPin,
  },

  {
    title: "Email Address",
    value: "info@nexgenixhub.com",
    icon: Mail,
  },

  {
    title: "Phone / WhatsApp",
    value: "+92 300 6394367",
    icon: Phone,
  },

  {
    title: "Working Hours",
    value: "Mon - Sat, 9:00 AM - 6:00 PM PKT",
    icon: Clock,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },

  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
  },

  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];