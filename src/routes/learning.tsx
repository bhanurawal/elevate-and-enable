import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, GraduationCap, Users, ArrowUpRight, Quote } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { profile, testimonials } from "@/lib/content";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning & Mentorship — Bhanu Rawal | Sharing Knowledge Openly" },
      {
        name: "description",
        content:
          "Bhanu Rawal shares knowledge openly through LinkedIn thought leadership, college sessions, and structured internal mentorship programs shaping next-gen talent.",
      },
      { property: "og:title", content: "Learning & Mentorship — Bhanu Rawal" },
      { property: "og:description", content: "Thought leadership, college sessions, and mentorship programs." },
    ],
  }),
  component: Learning,
});

const pillars = [
  {
    icon: Linkedin,
    title: "LinkedIn Thought Leadership",
    items: [
      "AI learnings posts",
      "Enterprise transformation insights",
      "Real-estate & operations modernization frameworks",
      "Productivity and design systems",
    ],
  },
  {
    icon: GraduationCap,
    title: "College Sessions",
    items: [
      "Workshops on AI and its applications",
      "Career guidance for students",
      "Hands-on demos and live builds",
      "Sessions impacting 100+ students",
    ],
  },
  {
    icon: Users,
    title: "Internal Mentorship Programs",
    items: [
      "Structured learning paths",
      "Demo days and skill-uplift outcomes",
      "Practical, empowering guidance",
      "Stories of mentees growing into confident contributors",
    ],
  },
];

function Learning() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Sharing Knowledge Openly"
        title="Learning & mentorship that lifts everyone"
        intro="I believes in teaching others to accelerate their growth - combining public thought leadership, college sessions, and structured mentorship."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="glass-card rounded-2xl p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="glass-card mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl p-8">
          <div>
            <h3 className="text-xl font-semibold">Follow Bhanu on LinkedIn</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Insights on AI literacy, enterprise transformation, and building in public.
            </p>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            Follow on LinkedIn <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
            Testimonials & Social Proof
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Trusted by leaders, students & mentees</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.quote} className="glass-card rounded-2xl p-6">
                <Quote className="h-6 w-6 text-electric-soft" />
                <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                  — {t.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
