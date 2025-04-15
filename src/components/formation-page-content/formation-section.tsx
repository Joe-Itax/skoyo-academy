import { useState } from "react";

import rawFormations from "@/data/formations.json";

import PaginationFormation from "@/components/pagination-formation";
import CardFormation from "@/components/card-formation";
import { FormationFilter } from "@/components/formation-filter";

// S'assurer que la propriété 'niveau' correspond au type attendu
const formations = rawFormations.map((formation) => ({
  ...formation,
  niveau: formation.niveau as "Débutant" | "Intermédiaire" | "Avancé",
}));

export default function FormationSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategorie, setSelectedCategorie] = useState<string>("Tous");
  const [selectedNiveau, setSelectedNiveau] = useState<string>("Tous");

  // Filtrage des formations
  const filteredFormations = formations.filter((formation) => {
    const matchesCategorie =
      selectedCategorie === "Tous" || formation.categorie === selectedCategorie;
    const matchesNiveau =
      selectedNiveau === "Tous" ||
      (formation.niveau as "Débutant" | "Intermédiaire" | "Avancé") ===
        selectedNiveau;
    return matchesCategorie && matchesNiveau;
  });

  // Pagination
  const formationsPerPage = 12;
  const totalPages = Math.ceil(filteredFormations.length / formationsPerPage);
  const paginatedFormations = filteredFormations.slice(
    (currentPage - 1) * formationsPerPage,
    currentPage * formationsPerPage
  );

  // Catégories uniques pour les filtres
  const categories = ["Tous", ...new Set(formations.map((f) => f.categorie))];
  const niveaux = ["Tous", "Débutant", "Intermédiaire", "Avancé"];

  return (
    <section
      id="formation-list"
      className="formation-section container mx-auto pt-8 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtres */}
        <div className="flex justify-between sm:flex-row flex-col">
          <h2 className="text-3xl font-bold mb-8">
            Explorer notre catalogue de formations
          </h2>
          <FormationFilter
            categories={categories}
            selectedCategorie={selectedCategorie}
            setSelectedCategorie={setSelectedCategorie}
            setCurrentPage={setCurrentPage}
            niveaux={niveaux}
            selectedNiveau={selectedNiveau}
            setSelectedNiveau={setSelectedNiveau}
          />
        </div>

        <h3 className="text-2xl text-left pt-5">
          &nbsp; {filteredFormations.length} formations affichées sur{" "}
          {formations.length}
        </h3>
        {/* Liste des formations */}
        <CardFormation items={paginatedFormations} />
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <PaginationFormation
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
