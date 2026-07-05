import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { profile } from "@/lib/content";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#impact", label: "Impact" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#prototypes", label: "Prototypes" },
  { href: "/#industries", label: "Industries" },
  { href: "/#learning", label: "Learning & Mentorship" },
  { href: "/#connect", label: "Connect" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric-soft to-electric font-display text-sm font-bold text-primary-foreground">
            BR
          </span>
          <span className="font-display text-base font-semibold tracking-tight">Bhanu Rawal</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanu Rawal on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-electric hover:text-electric-soft"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Bhanu Rawal on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
