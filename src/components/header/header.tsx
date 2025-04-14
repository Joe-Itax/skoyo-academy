import Logo from "../logo";
import NavDesktop from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <NavDesktop className="hidden sm:flex" />
        <NavMobile className="sm:hidden" />
      </div>
    </header>
  );
}
