import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { profile, stackBadges } from "@/data/content";
import { fadeInUp, revealOnMount, staggerContainer } from "@/lib/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4FD1AE 1px, transparent 1px), linear-gradient(to bottom, #4FD1AE 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div variants={staggerContainer} {...revealOnMount(reducedMotion)}>
          <motion.p
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-sm text-primary"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            disponible pour de nouveaux projets
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl leading-[1.08] font-extrabold text-foreground sm:text-5xl lg:text-6xl"
          >
            Je construis des sites qui{" "}
            <span className="text-primary">font venir des clients</span> aux
            commerçants locaux.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}. Des dizaines de sites déjà créés — chaque
            démo est construite sur des données réelles et vérifiées, jamais
            inventées.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-lg px-6 text-base">
              <a href="#realisations">
                Voir les réalisations
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-lg px-6 text-base">
              <a href={profile.phoneHref}>
                <Phone aria-hidden="true" />
                {profile.phone}
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground"
          >
            {stackBadges.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-card px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} {...revealOnMount(reducedMotion)}>
          <TerminalWindow title="mathieu@portfolio — profil.sh" bodyClassName="p-7">
            <div className="flex items-start gap-6">
              <img
                src={profile.photo}
                alt={profile.name}
                width={192}
                height={192}
                className="size-36 shrink-0 rounded-xl border border-border object-cover sm:size-48"
              />
              <div className="min-w-0 font-mono text-base leading-relaxed">
                <p className="text-primary">$ whoami</p>
                <p className="mt-1 text-lg text-foreground">{profile.name}</p>
                <p className="mt-4 text-primary">$ cat metier.txt</p>
                <p className="mt-1 text-muted-foreground">{profile.tagline}</p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div className="rounded-lg bg-secondary p-5">
                <p className="font-mono text-3xl font-bold text-primary">
                  +10
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  de sites livrés en production
                </p>
              </div>
              <div className="rounded-lg bg-secondary p-5">
                <p className="font-mono text-3xl font-bold text-primary">100%</p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  données réelles, sourcées
                </p>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
