import { motion, useReducedMotion } from "framer-motion";
import {
  Clock,
  HeartHandshake,
  Lock,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { guarantees } from "@/data/content";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  clock: Clock,
  "refresh-cw": RefreshCw,
  lock: Lock,
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
};

export function Guarantees() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="engagements"
      className="scroll-mt-20 border-y border-border bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)} className="max-w-2xl">
          <motion.p variants={fadeInUp} className="font-mono text-sm font-semibold text-primary">
            // engagements
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
          >
            Six engagements contractuels
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            Travailler avec un prestataire indépendant représente un risque.
            Je le neutralise par écrit, dès le devis.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {guarantees.map((item) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-xl border border-border bg-card p-7"
              >
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
