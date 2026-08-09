import { Terminal } from "lucide-react";
import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <Terminal className="size-4 text-primary" aria-hidden="true" />
          {profile.name}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Entreprise individuelle
          · SIREN {profile.siren}
        </p>
      </div>
    </footer>
  );
}
