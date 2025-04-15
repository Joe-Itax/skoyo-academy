import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BadgeNiveauFormationProps {
  niveau: "Débutant" | "Intermédiaire" | "Avancé";
  className?: string;
}

export default function BadgeNiveauFormation({
  niveau,
  className,
}: BadgeNiveauFormationProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1.5 text-white",
        niveau === "Avancé" && "bg-red-500",
        niveau === "Intermédiaire" && "bg-yellow-500",
        niveau === "Débutant" && "bg-green-500",
        className
      )}
    >
      {niveau}
    </Badge>
  );
}
