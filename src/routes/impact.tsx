import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { impactMetrics, impactStories } from "@/lib/content";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Bhanu Rawal | Value Delivered Across Organizations" },
      {
        name: "description",
        content:
          "Measurable outcomes from Bhanu Rawal's enterprise transformation work: $14M annual savings, 30% incident reduction, $50M+ portfolio value, and more.",
      },
      { property: "og:title", content: "Impact — Bhanu Rawal" },
      { property: "og:description", content: "Measurable value delivered across global organizations." },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Value Delivered Across Organizations"
        title="Impact that moves the business forward"
        intro="Every engagement is measured by outcomes — savings, adoption, risk reduction, and capability uplift across global enterprises."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((m) => (
            <div key={m.label} className="glass-card rounded-2xl p-6">
              <div className="font-display text-4xl font-bold text-gradient">{m.value}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-2xl font-bold sm:text-3xl">Impact stories</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {impactStories.map((s) => (
            <article key={s.title} className="glass-card rounded-2xl p-7">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <dl className="mt-5 space-y-4">
                {[
                  ["Problem", s.problem],
                  ["Approach", s.approach],
                  ["Outcome", s.outcome],
                  ["What Bhanu enabled", s.enabled],
                ].map(([label, val]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-electric-soft">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{val}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
