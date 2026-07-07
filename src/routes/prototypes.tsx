import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { prototypes } from "@/lib/content";

export const Route = createFileRoute("/prototypes")({
  head: () => ({
    meta: [
      { title: "Portal — Play With Bhanu Rawal's Work" },
      {
        name: "description",
        content:
          "A portal to play with some of the work Bhanu Rawal has delivered — interactive demos of RAG assistants, AI workflow agents, and analytics dashboards.",
      },
      { property: "og:title", content: "Portal — Play With Bhanu's Work" },
      { property: "og:description", content: "Interactive demos of AI assistants, agents, and dashboards." },
    ],
  }),
  component: Prototypes,
});

function Prototypes() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Try It Yourself"
        title="A portal to play with the work I've delivered"
        intro="Jump into a few interactive demos that showcase how AI-first thinking turns into working products — explore, click around, and see the ideas in action."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prototypes.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card group flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                  <Sparkles className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-electric-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-electric-soft">
                Open demo
              </span>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
