import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, pricingTiers } from "@/data/content";

type DevisDrawerProps = {
  open: boolean;
  onClose: () => void;
  defaultTier: string | null;
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-input bg-input/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ring focus:ring-3 focus:ring-ring/30";

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export function DevisDrawer({ open, onClose, defaultTier }: DevisDrawerProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload: Record<string, string> = { "form-name": "devis" };
    form.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
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
            aria-label="Demande de devis"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-101 w-full max-w-lg overflow-y-auto border-l border-border bg-background"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-6 py-4 backdrop-blur-sm">
              <span className="font-mono text-xs text-muted-foreground">devis.sh</span>
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
              {status === "success" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-extrabold text-foreground">
                    Demande envoyée
                  </h2>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    Je reviens vers vous sous 24 h avec une maquette ou des
                    questions sur votre projet.
                  </p>
                  <Button className="mt-7 h-11 rounded-lg px-6" onClick={onClose}>
                    Fermer
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-foreground">
                    Demander un devis
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Réponse sous 24 h. Aucun engagement — c'est une base de
                    discussion, le prix final est confirmé après l'audit
                    gratuit.
                  </p>

                  <form
                    name="devis"
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-4"
                  >
                    <input type="hidden" name="form-name" value="devis" />
                    <p className="hidden">
                      <label>
                        Ne pas remplir <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div>
                      <label htmlFor="devis-nom" className="text-xs font-mono text-muted-foreground">
                        Nom / Prénom *
                      </label>
                      <input
                        id="devis-nom"
                        name="nom"
                        type="text"
                        required
                        className={`${inputClass} mt-1.5`}
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="devis-email" className="text-xs font-mono text-muted-foreground">
                          Email *
                        </label>
                        <input
                          id="devis-email"
                          name="email"
                          type="email"
                          required
                          className={`${inputClass} mt-1.5`}
                          placeholder="vous@exemple.fr"
                        />
                      </div>
                      <div>
                        <label htmlFor="devis-tel" className="text-xs font-mono text-muted-foreground">
                          Téléphone
                        </label>
                        <input
                          id="devis-tel"
                          name="telephone"
                          type="tel"
                          className={`${inputClass} mt-1.5`}
                          placeholder="06 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="devis-offre" className="text-xs font-mono text-muted-foreground">
                        Offre *
                      </label>
                      <select
                        id="devis-offre"
                        name="offre"
                        required
                        defaultValue={defaultTier ?? pricingTiers[0].name}
                        className={`${inputClass} mt-1.5 appearance-none`}
                      >
                        {pricingTiers.map((tier) => (
                          <option key={tier.name} value={tier.name}>
                            {tier.name} — {tier.price} €
                          </option>
                        ))}
                        <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="devis-site" className="text-xs font-mono text-muted-foreground">
                        Site existant (si vous en avez un)
                      </label>
                      <input
                        id="devis-site"
                        name="site-existant"
                        type="text"
                        className={`${inputClass} mt-1.5`}
                        placeholder="www.votresite.fr ou fiche Google"
                      />
                    </div>

                    <div>
                      <label htmlFor="devis-message" className="text-xs font-mono text-muted-foreground">
                        Votre projet *
                      </label>
                      <textarea
                        id="devis-message"
                        name="message"
                        required
                        rows={5}
                        className={`${inputClass} mt-1.5 resize-none`}
                        placeholder="Décrivez votre activité et ce que vous cherchez pour votre site."
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
                        L'envoi a échoué. Contactez-moi directement au{" "}
                        <a href={profile.phoneHref} className="underline">
                          {profile.phone}
                        </a>{" "}
                        ou par{" "}
                        <a href={`mailto:${profile.email}`} className="underline">
                          email
                        </a>
                        .
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="h-12 w-full rounded-full text-base"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                          Envoi en cours
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="size-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
