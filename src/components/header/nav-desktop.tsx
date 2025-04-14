import { NavLink } from "react-router";
import navItems from "./nav-items";

export default function NavDesktop({ className }: { className?: string }) {
  return (
    <nav
      className={`${className} flex items-center gap-3 md:gap-6 nav-desktop`}
    >
      {navItems.map(({ label, path }) =>
        path.startsWith("/") ? (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `font-semibold transition-colors px-2.5 border border-transparent py-1 hover:border-b-primary hover:text-primary ${
                isActive ? "text-primary border-b border-b-primary" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ) : (
          <span
            key={label}
            className="font-semibold transition-colors px-2.5 border border-transparent py-1 hover:text-primary cursor-not-allowed"
            title="Fonctionnalité à venir"
          >
            {label}
          </span>
        )
      )}
    </nav>
  );
}
