import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";
import { fadeInUp, reveal, staggerContainer } from "@/lib/motion";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <motion.div variants={staggerContainer} {...reveal(reducedMotion)}>
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

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-12 rounded-lg px-6 text-base">
              <a href={profile.phoneHref}>
                <Phone aria-hidden="true" />
                {profile.phone}
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-lg px-6 text-base">
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" />
                {profile.email}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
