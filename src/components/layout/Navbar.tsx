import { useEffect, useState } from "react";
import { Mail, Menu, Phone, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const nav = [
  { label: "Portfolio", href: "#realisations" },
  { label: "Stack", href: "#stack" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="hidden border-b border-border bg-primary sm:block">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 font-mono text-xs font-semibold text-primary-foreground">
          <span className="flex items-center gap-2">
            <span className="size-1.5 animate-pulse rounded-full bg-primary-foreground" aria-hidden="true" />
            disponible pour de nouveaux projets
          </span>
          <div className="flex items-center gap-5">
            <a
              href={profile.phoneHref}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground"
          aria-label="Retour en haut de page"
        >
          <Terminal className="size-4 text-primary" aria-hidden="true" />
          <span>
            <span className="text-primary">~/</span>mathieu-salama
          </span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Navigation principale">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-sm font-bold tracking-wide text-primary uppercase transition-colors hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="h-9 rounded-lg px-4 font-mono text-sm">
            <a href={profile.phoneHref}>
              <Phone aria-hidden="true" />
              <span className="hidden sm:inline">{profile.phone}</span>
              <span className="sm:hidden">Appeler</span>
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="grid size-9 place-items-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <Menu className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

    </header>

    <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} items={nav} />
  </>
  );
}
