import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/data/content";

type ProjectDrawerProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-100 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Détail du projet ${project.name}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-101 w-full max-w-xl overflow-y-auto border-l border-border bg-background"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-6 py-4 backdrop-blur-sm">
              <span className="font-mono text-xs text-muted-foreground">
                projet.sh — {project.slug}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 py-6">
              <img
                src={project.image}
                alt={`Capture d'écran du site ${project.name}`}
                className="w-full rounded-xl border border-border object-cover object-top"
              />

              <h2 className="mt-6 text-2xl font-extrabold text-foreground">
                {project.name}
              </h2>
              <p className="mt-1 font-mono text-sm text-primary">
                {project.sector} · {project.city}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {project.detail}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5">
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">Année</p>
                  <p className="mt-1 text-sm text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">Secteur</p>
                  <p className="mt-1 text-sm text-foreground">{project.sector}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Stack technique
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
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
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Voir le site en direct
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
