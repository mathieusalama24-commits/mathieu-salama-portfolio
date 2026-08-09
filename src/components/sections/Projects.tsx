import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

export function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="realisations" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)} className="max-w-2xl">
          <motion.p
            variants={fadeInUp}
            className="font-mono text-sm font-semibold text-primary"
          >
            // réalisations
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
          >
            Des commerçants, des sites déployés
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            Chaque site est construit sur des données vérifiées — adresse,
            horaires, avis, prestations — jamais sur un contenu générique.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.a
              key={project.slug}
              variants={fadeInUp}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={`Capture d'écran du site ${project.name}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex grow flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{project.name}</h3>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1 font-mono text-xs text-primary">
                  {project.sector} · {project.city}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.pitch}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
