import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Download,
  Briefcase,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import bhanuPortrait from "@/assets/bhanu-portrait.png";
import resume from "@/assets/resume.pdf.asset.json";
import {
  proofBar,
  strengths,
  impactMetrics,
  impactStories,
  companies,
  careerJourney,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">{children}</p>
  );
}

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-navy-deep">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--electric)_0%,_transparent_55%)] opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-soft">
              <Sparkles className="h-3.5 w-3.5" /> The Executive Who Builds the Future
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building Intelligent Enterprises.{" "}
              <span className="text-gradient">Empowering People. Creating Value.</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Explore His Work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resume.url}
                download="Bhanu-Rawal-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-electric"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Companies I've worked with
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {companies.map((c) => (
                  <span
                    key={c.name}
                    className="rounded-full border border-border/70 bg-card/40 px-4 py-2 text-sm font-semibold backdrop-blur"
                    title={c.role}
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep to-transparent" />
              <img
                src={bhanuPortrait}
                alt="Portrait of Bhanu Rawal"
                width={930}
                height={1140}
                className="relative w-full max-w-xs object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_78%,transparent)] sm:max-w-sm"
              />
            </div>
            <div className="-mt-2 grid w-full max-w-md grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {proofBar.map((p) => (
                <div key={p.label} className="glass-card rounded-xl px-3 py-3 text-center">
                  <p className="text-xs leading-snug sm:text-sm">
                    <span className="font-display text-lg font-bold text-gradient">{p.value}</span>{" "}
                    <span className="text-muted-foreground">{p.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow>Why Leaders Work With Bhanu</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">About Bhanu</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Bhanu is a global technology and digital transformation leader who helps enterprises
                modernize operations, embed AI-first innovation, and unlock measurable business value.
                He operates across strategy, architecture, and execution- enabling teams, uplifting
                capabilities, and delivering outcomes that matter.
              </p>
            </div>

            {/* Mobile: single card with bullets */}
            <div className="glass-card rounded-2xl p-6 sm:hidden">
              <ul className="space-y-3">
                {strengths.map((s) => (
                  <li key={s} className="flex gap-2.5 text-sm font-medium leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop: grid of tiles */}
            <ul className="hidden gap-3 sm:grid sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="glass-card rounded-xl px-5 py-4 text-sm font-medium leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-14 sm:mt-16">
          <SectionEyebrow>25+ Years of Enterprise Leadership</SectionEyebrow>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Career journey</h3>
          <div className="mt-8 space-y-5 sm:mt-10">
            {careerJourney.map((job) => (
              <div
                key={job.period + job.title}
                className="glass-card grid gap-4 rounded-2xl p-6 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-electric-soft">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-semibold">{job.period}</span>
                  </div>
                  <div className="mt-2 font-display text-lg font-bold">{job.company}</div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Impact */}
      <section id="impact" className="border-y border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <Reveal>
            <SectionEyebrow>Value Delivered Across Organizations</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Measurable impact</h2>
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((m) => (
                <div key={m.label} className="glass-card rounded-2xl p-5 sm:p-6">
                  <p className="leading-snug">
                    <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                      {m.value}
                    </span>{" "}
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-14 sm:mt-16">
            <h3 className="text-2xl font-bold sm:text-3xl">Impact stories</h3>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {impactStories.map((s) => (
                <article key={s.title} className="glass-card rounded-2xl p-7">
                  <h4 className="text-xl font-semibold">{s.title}</h4>
                  <dl className="mt-5 space-y-4">
                    {[
                      ["Problem", s.problem],
                      ["Approach", s.approach],
                      ["Outcome", s.outcome],
                      ["Enabled", s.enabled],
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
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
