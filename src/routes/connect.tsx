import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { profile, connectOptions } from "@/lib/content";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Work With Bhanu Rawal" },
      {
        name: "description",
        content:
          "Book a conversation, invite Bhanu Rawal for a session, request mentorship, or collaborate on an AI-first prototype.",
      },
      { property: "og:title", content: "Work With Bhanu Rawal" },
      { property: "og:description", content: "Book a conversation, session, mentorship, or prototype collaboration." },
    ],
  }),
  component: Connect,
});

function Connect() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Work With Bhanu"
        title="If you're building the future of your enterprise, let's talk"
        intro="Whether you need transformation leadership, an AI-first prototype, a keynote, or mentorship — Bhanu can help you get there faster."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {connectOptions.map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>

          <aside className="glass-card flex flex-col gap-6 rounded-2xl p-8">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-xl border border-border/60 px-5 py-4 transition-colors hover:border-electric"
            >
              <Mail className="h-5 w-5 text-electric-soft" />
              <span className="text-sm font-medium">{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border/60 px-5 py-4 transition-colors hover:border-electric"
            >
              <Linkedin className="h-5 w-5 text-electric-soft" />
              <span className="text-sm font-medium">linkedin.com/in/bhanu-ai</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border/60 px-5 py-4">
              <MapPin className="h-5 w-5 text-electric-soft" />
              <span className="text-sm font-medium">{profile.location}</span>
            </div>
            <a
              href={`mailto:${profile.email}?subject=Let's%20work%20together`}
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-6 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Book a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
