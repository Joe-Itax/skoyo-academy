import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react";
import navItems from "../header/nav-items";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 text-center">
        <nav className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mb-4 flex justify-center gap-6">
          {socialRx.map((rx) => (
            <Link
              key={rx.name}
              to={rx.href}
              aria-label={rx.name}
              className="text-gray-600 hover:text-gray-900"
            >
              {rx.icon}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Skoyo Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

type SocialRx = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const socialRx: SocialRx[] = [
  {
    name: "facebook",
    href: "#",
    icon: <Facebook size={20} />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram size={20} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <Twitter size={20} />,
  },
  {
    name: "Github",
    href: "#",
    icon: <Github size={20} />,
  },
  {
    name: "Youtube",
    href: "#",
    icon: <Youtube size={20} />,
  },
];
