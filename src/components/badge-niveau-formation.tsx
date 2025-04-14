import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function BadgeNiveauFormation({ niveau }: { niveau?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 text-white",
        niveau === "Avancé" && "bg-red-500",
        niveau === "Intermédiaire" && "bg-yellow-500",
        niveau === "Débutant" && "bg-green-500"
      )}
    >
      {/* <span
        className={cn(
          "size-2 rounded-full",
          niveau === "Avancé" && "bg-white",
          niveau === "Intermédiaire" && "bg-yellow-500",
          niveau === "Débutant" && "bg-green-500"
        )}
        aria-hidden="true"
      ></span> */}
      {niveau}
    </Badge>
  );
}
