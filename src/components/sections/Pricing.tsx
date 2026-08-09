import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, pricingTiers } from "@/data/content";
import { cn } from "@/lib/utils";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

export function Pricing() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="tarifs" className="scroll-mt-20 border-y border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)} className="max-w-2xl">
          <motion.p variants={fadeInUp} className="font-mono text-sm font-semibold text-primary">
            // tarifs
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
          >
            Deux formules, un prix fixe annoncé d'avance
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            Paiement unique, pas d'abonnement caché. Point de départ — chaque
            projet est chiffré précisément après l'audit gratuit.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="mx-auto mt-12 grid max-w-3xl items-start gap-6 sm:grid-cols-2"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
              className={cn(
                "relative flex h-full flex-col rounded-xl border p-7",
                tier.highlighted
                  ? "border-primary/60 bg-secondary shadow-[0_0_0_1px_var(--primary),0_24px_60px_-24px_rgba(79,209,174,0.35)] lg:-translate-y-3"
                  : "border-border bg-card",
              )}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-7 font-mono text-[0.65rem] tracking-wide uppercase">
                  Le plus choisi
                </Badge>
              )}

              <h3 className="font-mono text-sm text-muted-foreground">{tier.name}</h3>

              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-5xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="font-mono text-lg text-muted-foreground">€</span>
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{tier.subtitle}</p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.highlighted ? "default" : "outline"}
                className="mt-7 h-12 w-full rounded-full text-base"
              >
                <a href={profile.phoneHref}>
                  Commander à {tier.price} €
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
