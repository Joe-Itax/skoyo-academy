import { useState } from "react";
import { FilterIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import BadgeNiveauFormation from "@/components/badge-niveau-formation";

interface FormationFilterProps {
  className?: string;
  categories: string[];
  selectedCategorie: string;
  setSelectedCategorie: (categorie: string) => void;
  setCurrentPage: (page: number) => void;
  niveaux: string[];
  selectedNiveau: string;
  setSelectedNiveau: (niveau: string) => void;
}

export function FormationFilter({
  className,
  categories,
  selectedCategorie,
  setSelectedCategorie,
  setCurrentPage,
  niveaux,
  selectedNiveau,
  setSelectedNiveau,
}: FormationFilterProps) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className={`${className}`}>
        <Button variant={"outline"} className="text-[1rem]">
          <FilterIcon className="cursor-pointer size-5" />
          &nbsp; Filtrer
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`${className} w-[300px] max-[300px]:w-full`}
      >
        <SheetHeader onClick={() => setOpen(false)}>
          <h2 className="text-2xl font-bold">Filtrer</h2>
        </SheetHeader>
        <div className="separator shrink-0 bg-border h-[1px] w-full"></div>
        <div className="grid gap-1 p-4 pt-0">
          <h3 className="text-xl font-semibold mb-4">Catégorie</h3>

          {categories.map((categorie) => (
            <Button
              key={categorie}
              variant={
                selectedCategorie === categorie ? "secondary" : "outline"
              }
              size="sm"
              onClick={() => {
                setSelectedCategorie(categorie);
                setCurrentPage(1);
              }}
            >
              {categorie}
            </Button>
          ))}
        </div>
        <div className="separator px-2">
          <div className=" shrink-0 bg-border h-[1px] w-full"></div>
        </div>
        <div className="grid gap-1 p-4 pt-0">
          <h3 className="text-xl font-semibold mb-4">Niveau</h3>

          {niveaux.map((niveau) => (
            <Button
              key={niveau}
              variant={selectedNiveau === niveau ? "secondary" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedNiveau(niveau);
                setCurrentPage(1); // Reset à la première page quand on change le filtre
              }}
            >
              {niveau === "Tous" ? (
                niveau
              ) : (
                <BadgeNiveauFormation
                  niveau={niveau as "Débutant" | "Intermédiaire" | "Avancé"}
                />
              )}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
