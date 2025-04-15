import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationFormation({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);

      setTimeout(() => {
        const element = document.getElementById("formation-list");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
          });
        }
      }, 50); // Délai minimal pour laisser le DOM se mettre à jour
    }
  };

  return (
    <Pagination className="flex-wrap">
      <PaginationContent>
        {/* Premier page */}
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageChange(1)}
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            aria-label="Première page"
            aria-disabled={currentPage === 1}
          >
            <ChevronFirstIcon size={16} aria-hidden="true" />
            <span className="sr-only">Première page</span>
          </PaginationLink>
        </PaginationItem>

        {/* Page précédente */}
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageChange(currentPage - 1)}
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            aria-label="Page précédente"
            aria-disabled={currentPage === 1}
          >
            <ChevronLeftIcon size={16} aria-hidden="true" />
            <span className="sr-only">Précédent</span>
          </PaginationLink>
        </PaginationItem>

        {/* Sélecteur de page (mobile friendly) */}
        <PaginationItem>
          <Select
            value={String(currentPage)}
            onValueChange={(value) => handlePageChange(Number(value))}
            aria-label="Sélectionner une page"
          >
            <SelectTrigger className="w-24">
              <SelectValue placeholder={`Page ${currentPage}`} />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <SelectItem key={page} value={String(page)}>
                    Page {page}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </PaginationItem>

        {/* Page suivante */}
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageChange(currentPage + 1)}
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            aria-label="Page suivante"
            aria-disabled={currentPage === totalPages}
          >
            <ChevronRightIcon size={16} aria-hidden="true" />
            <span className="sr-only">Suivant</span>
          </PaginationLink>
        </PaginationItem>

        {/* Dernière page */}
        <PaginationItem>
          <PaginationLink
            onClick={() => handlePageChange(totalPages)}
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50 cursor-pointer"
            aria-label="Dernière page"
            aria-disabled={currentPage === totalPages}
          >
            <ChevronLastIcon size={16} aria-hidden="true" />
            <span className="sr-only">Dernière page</span>
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
