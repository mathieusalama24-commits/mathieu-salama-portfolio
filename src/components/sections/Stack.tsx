import { motion, useReducedMotion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

const lines = [
  { cmd: "frontend", value: "React 19, TypeScript, Vite" },
  { cmd: "style", value: "Tailwind CSS v4, shadcn/ui, Framer Motion" },
  { cmd: "3d", value: "Three.js, React Three Fiber (quand ça sert vraiment le site)" },
  { cmd: "formulaires", value: "React Hook Form, Zod, Netlify Forms" },
  { cmd: "hébergement", value: "Netlify, headers de sécurité A+ sur securityheaders.com" },
  { cmd: "méthode", value: "audit des données réelles avant toute ligne de code" },
];

export function Stack() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="stack" className="scroll-mt-20 border-y border-border bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)}>
          <motion.p variants={fadeInUp} className="font-mono text-sm font-semibold text-primary">
            // stack & méthode
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
          >
            Ce qu'il y a sous le capot
          </motion.h2>
        </motion.div>

        <motion.div variants={fadeInUp} {...reveal(reducedMotion)} className="mt-10">
          <TerminalWindow title="stack.yml">
            <dl className="space-y-3 font-mono text-sm">
              {lines.map((line) => (
                <div key={line.cmd} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="shrink-0 text-primary">{line.cmd}:</dt>
                  <dd className="text-muted-foreground">{line.value}</dd>
                </div>
              ))}
            </dl>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
