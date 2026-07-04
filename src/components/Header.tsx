import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/prototypes", label: "Prototypes" },
  { to: "/learning", label: "Learning & Mentorship" },
  { to: "/connect", label: "Connect" },
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
          {nav.slice(1, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/connect"
            className="rounded-full bg-gradient-to-r from-electric-soft to-electric px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-12px_var(--electric)] transition-transform hover:scale-[1.03]"
          >
            Connect with Bhanu
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
