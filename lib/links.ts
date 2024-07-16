import { DraftingCompass, Home, Origami, Send } from "lucide-react";

import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Origami,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: DraftingCompass,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Send,
  },
];

const sourceLink = {
  label: "GitHub",
  href: "https://github.com/fromenoabasi",
  icon: FaGithub,
};

const socialLinks = [
  {
    label: "Twitter",
    href: "https://x.com/from_enoabasi",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/fromenoabasi",
    icon: FaInstagram,
  },
  sourceLink,
];

export { navLinks, socialLinks, sourceLink };
