import * as React from "react";
import { SearchIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import formations from "@/data/formations.json";
import BadgeNiveauFormation from "./badge-niveau-formation";

export default function InputSearch() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filteredFormations = formations.filter((formation) =>
    formation.titre.toLowerCase().includes(search.toLowerCase())
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="w-fit h-10 cursor-pointer border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] transition-all duration-300 hover:-translate-y-0.5"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="text-foreground -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
          <span className="text-foreground font-normal">Rechercher</span>
        </span>
        <kbd className="bg-background text-foreground ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Taper le nom d'une formation..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>Aucune formation trouvée.</CommandEmpty>
          <CommandGroup heading="Formations">
            {filteredFormations.map((formation) => (
              <CommandItem
                key={formation.id}
                value={formation.titre}
                className="justify-between"
              >
                <span>{formation.titre}</span>
                <BadgeNiveauFormation niveau={formation.niveau} />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
