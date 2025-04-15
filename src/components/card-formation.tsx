import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import BadgeNiveauFormation from "@/components/badge-niveau-formation";

interface Formation {
  id: number;
  titre: string;
  description: string;
  duree: number;
  niveau: "Débutant" | "Intermédiaire" | "Avancé";
  categorie: string;
}

export default function CardFormation({
  items,
  className,
}: {
  items: Formation[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.titre}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <BadgeNiveauFormation niveau={item.niveau} />
              <span className="text-xs text-zinc-700 dark:text-gray-400">
                {item.duree} {item.duree > 1 ? "heures" : "heure"}
              </span>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const variants = {
    hidden: (direction: unknown) => ({
      opacity: 0,
      y: direction === 1 ? 100 : -100,
    }),
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className={cn(
        "rounded-2xl h-full w-full shadow-md p-4 overflow-hidden bg-card border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
      custom={1}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-card-foreground font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
