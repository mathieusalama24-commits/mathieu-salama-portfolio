import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { profile } from "@/data/content";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";
import { DevisDrawer } from "./DevisDrawer";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [devisOpen, setDevisOpen] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:scroll-mt-28 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeInUp} className="font-mono text-sm font-semibold text-primary">
            // contact
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl leading-tight font-extrabold text-foreground sm:text-4xl"
          >
            Une maquette gratuite, sans engagement
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg leading-relaxed text-muted-foreground"
          >
            Comme pour les commerçants ci-dessus : je regarde votre présence
            en ligne, je vous montre ce que ça pourrait donner, vous décidez
            ensuite.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          {...reveal(reducedMotion)}
          className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center rounded-xl border border-border bg-card p-7"
          >
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Basé à
                  </p>
                  <p className="mt-1 text-sm text-foreground">{profile.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Zone d'intervention
                  </p>
                  <p className="mt-1 text-sm text-foreground">{profile.reach}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">
                    Téléphone
                  </p>
                  <p className="mt-1 text-sm text-foreground">{profile.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase">Email</p>
                  <p className="mt-1 text-sm text-foreground">{profile.email}</p>
                </div>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-lg px-5 text-sm">
                <a href={profile.phoneHref}>
                  <Phone aria-hidden="true" />
                  {profile.phone}
                </a>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-11 rounded-lg px-5 text-sm"
                onClick={() => setDevisOpen(true)}
              >
                Demander un devis
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <TerminalWindow
              title="zone.map"
              bodyClassName="p-0"
              className="h-full min-h-[280px]"
            >
              <iframe
                title="Localisation — Argenteuil"
                src="https://www.google.com/maps?q=Argenteuil,France&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full lg:h-full lg:min-h-[280px]"
              />
            </TerminalWindow>
          </motion.div>
        </motion.div>
      </div>

      <DevisDrawer
        open={devisOpen}
        onClose={() => setDevisOpen(false)}
        defaultTier={null}
      />
    </section>
  );
}
