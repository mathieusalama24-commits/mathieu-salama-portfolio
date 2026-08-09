import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/content";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

export function Faq() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div>
            <motion.p variants={fadeInUp} className="font-mono text-sm font-semibold text-primary">
              // faq
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
            >
              Les questions essentielles
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-lg leading-relaxed text-muted-foreground"
            >
              Des réponses claires, telles que je les apporte au téléphone.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="divide-y divide-border border-t border-border">
            {faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground marker:content-none">
                  {item.question}
                  <ChevronDown
                    className="size-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
