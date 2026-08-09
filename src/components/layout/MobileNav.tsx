import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { profile } from "@/data/content";

type NavItem = { label: string; href: string };

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
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
            aria-label="Menu de navigation"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-y-0 right-0 z-101 flex w-full max-w-xs flex-col border-l border-border bg-background"
          >
            <div className="flex items-center justify-between border-b border-border bg-terminal-bar px-4 py-2.5">
              <span className="flex items-center gap-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-terminal-dot-red/70" />
                  <span className="size-2.5 rounded-full bg-terminal-dot-yellow/70" />
                  <span className="size-2.5 rounded-full bg-terminal-dot-green/70" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">nav.sh</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col overflow-y-auto py-2" aria-label="Navigation principale">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between border-b border-border px-6 py-5 font-mono text-lg font-bold tracking-wide text-primary uppercase transition-colors hover:bg-secondary"
                >
                  <span>{item.label}</span>
                  <span
                    className="text-primary opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>

            <div className="border-t border-border p-4">
              <a
                href={profile.phoneHref}
                onClick={onClose}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-4" aria-hidden="true" />
                {profile.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
