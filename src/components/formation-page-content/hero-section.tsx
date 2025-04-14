import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="w-full py-20 bg-gradient-to-b from-white to-muted">
//       <div className="container mx-auto px-4 text-center max-w-3xl">
//         <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
//           Explorez des formations pensées pour l’avenir
//         </h1>
//         <p className="mt-4 text-lg text-muted-foreground">
//   Rejoignez Skoyo Academy et accédez à des cours modernes, dynamiques et
//   adaptés à vos besoins.
//         </p>
//         <div className="mt-8">
//   <Button
//     size="lg"
//     onClick={() => {
//       document
//         .getElementById("formation-list")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }}
//   >
//     Voir les formations <ChevronDown className="ml-2 w-5 h-5" />
//   </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import InputSearch from "../input-search";
import { BackgroundBeams } from "../ui/background-beams";

export default function HeroSection() {
  return (
    <section className="hero-section relative mx-auto flex flex-col items-center justify-center h-[40rem] w-full rounded-md bg-neutral-950 antialiased">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-secondary md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Explorez des formations pensées pour l’avenir"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-secondary-foreground dark:text-neutral-400"
        >
          Rejoignez Skoyo Academy et accédez à des cours modernes, dynamiques et
          adaptés à vos besoins.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => {
              document
                .getElementById("formation-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Voir les formations{" "}
            <ChevronDown className="ml-2 size-6 animate-bounce" />
          </Button>
          {/* <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
                  </button> */}
          <InputSearch />
        </motion.div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
