
import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <span className="font-display text-lg font-semibold">Bhanu Rawal</span>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Transforming enterprises by blending strategy, technology, and human enablement.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><a href="/#about" className="hover:text-foreground">About</a></li>
            <li><a href="/#impact" className="hover:text-foreground">Impact</a></li>
            <li><a href="/portfolio" className="hover:text-foreground">Portfolio</a></li>
            <li><a href="/industries" className="hover:text-foreground">Industries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Connect</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><a href="/connect" className="hover:text-foreground">Work with Bhanu</a></li>
            <li><a href="/learning" className="hover:text-foreground">Learning & Mentorship</a></li>
            <li><a href="/prototypes" className="hover:text-foreground">Prototypes</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
          </ul>
        </div>

      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bhanu Rawal. All rights reserved.
      </div>
    </footer>
  );
}
