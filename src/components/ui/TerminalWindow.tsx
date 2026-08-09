import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-terminal-bar px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-terminal-dot-red/70" />
          <span className="size-2.5 rounded-full bg-terminal-dot-yellow/70" />
          <span className="size-2.5 rounded-full bg-terminal-dot-green/70" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
