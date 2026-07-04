import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import transformation from "@/assets/transformation.jpg";
import { portfolio } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Bhanu Rawal | Enterprise Transformation" },
      {
        name: "description",
        content:
          "Bhanu Rawal's enterprise transformation portfolio: AI-first modernization, machine vision, workflow automation, compliance platforms, and scalable architecture.",
      },
      { property: "og:title", content: "Portfolio — Bhanu Rawal" },
      { property: "og:description", content: "Enterprise transformation portfolio across AI, automation, and architecture." },
      { property: "og:image", content: transformation },
      { name: "twitter:image", content: transformation },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Enterprise Transformation Portfolio"
        title="Building AI-first, future-proof enterprises"
        intro="A portfolio spanning AI modernization, automation, compliance, and scalable architecture — each grounded in a clear problem, approach, framework, and measurable outcome."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <article
              key={p.title}
              className="glass-card group flex flex-col rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <h3 className="max-w-[85%] text-lg font-semibold leading-snug">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-electric-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-electric-soft">
                Framework
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{p.framework}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-electric-soft">
                Outcome
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.outcome}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
