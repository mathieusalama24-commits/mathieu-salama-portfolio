import { useEffect, useState } from "react";
import { Phone, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Réalisations", href: "#realisations" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
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
              className="rounded-lg px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="h-9 rounded-lg px-4 font-mono text-sm">
          <a href={profile.phoneHref}>
            <Phone aria-hidden="true" />
            <span className="hidden sm:inline">{profile.phone}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
