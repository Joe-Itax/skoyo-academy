import { useState } from "react";
import { NavLink } from "react-router";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import navItems from "@/components/header/nav-items";

import Logo from "@/components/logo";

export function NavMobile({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`${className}`}>
        <MenuIcon
          className="cursor-pointer border-2 rounded-md p-0.5 border-border hover:text-primary hover:border-gray-400 transition-all"
          size={40}
        />
      </SheetTrigger>
      <SheetContent className={`${className} w-[300px] max-[300px]:w-full`}>
        <SheetHeader onClick={() => setOpen(false)}>
          <Logo />
        </SheetHeader>
        <nav className="grid gap-4 py-4">
          <ul className="flex flex-col">
            <li className="px-3">
              {navItems.map(({ label, path }) =>
                path.startsWith("/") ? (
                  <NavLink
                    key={label}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block w-full px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ) : (
                  <span
                    key={label}
                    onClick={() => setOpen(false)}
                    className="block w-full mt-1 px-3 py-2 font-semibold text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-not-allowed"
                  >
                    {label}
                  </span>
                )
              )}
            </li>
          </ul>
        </nav>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button></Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
