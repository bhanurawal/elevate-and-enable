import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { prototypes, learningPhilosophy } from "@/lib/content";

export const Route = createFileRoute("/prototypes")({
  head: () => ({
    meta: [
      { title: "Prototypes — Bhanu Rawal | Learning by Building" },
      {
        name: "description",
        content:
          "A gallery of prototypes Bhanu Rawal builds to consolidate learning — RAG apps, AI agents, Streamlit demos, workflow automation, and data visualization tools.",
      },
      { property: "og:title", content: "Prototype Gallery — Bhanu Rawal" },
      { property: "og:description", content: "Learning by building: RAG apps, agents, automation, and more." },
    ],
  }),
  component: Prototypes,
});

function Prototypes() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Always Upgrading, Always Building"
        title="A learner's mindset, made visible"
        intro="Bhanu learns by building — shipping prototypes to consolidate learning, stay ahead of technological shifts, and share knowledge openly."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Prototype gallery</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prototypes.map((p) => (
            <div
              key={p.title}
              className="glass-card group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Learning philosophy</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              What differentiates Bhanu is a relentless commitment to growth — for himself and for
              everyone around him.
            </p>
            <Link
              to="/learning"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-soft hover:gap-3 transition-all"
            >
              Explore learning & mentorship <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3">
            {learningPhilosophy.map((l) => (
              <li key={l} className="glass-card rounded-xl px-5 py-4 text-sm font-medium">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
