import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Quote, Download, Briefcase } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import bhanuPortrait from "@/assets/bhanu-portrait.png";
import resume from "@/assets/resume.pdf.asset.json";
import {
  proofBar,
  strengths,
  impactMetrics,
  companies,
  careerJourney,
  industries,
  testimonials,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--electric)_0%,_transparent_55%)] opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          {/* Copy */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-soft">
              <Sparkles className="h-3.5 w-3.5" /> The Executive Who Builds the Future
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building Intelligent Enterprises.{" "}
              <span className="text-gradient">Empowering People. Creating Value.</span>
            </h1>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Explore His Work <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={resume.url}
                download="Bhanu-Rawal-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-electric"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
            </div>

            {/* Companies worked with */}
            <div className="mt-10">
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

          {/* Portrait + KPIs */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep to-transparent" />
              <img
                src={bhanuPortrait}
                alt="Portrait of Bhanu Rawal"
                width={930}
                height={1140}
                className="relative w-full max-w-sm object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_78%,transparent)]"
              />
            </div>
            <div className="mt-4 grid w-full max-w-md grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 lg:grid-cols-4">
              {proofBar.map((p) => (
                <div key={p.label} className="bg-navy-deep px-3 py-5 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">{p.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive summary */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
              Why Leaders Work With Bhanu
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Executive summary</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Bhanu is a global technology and digital transformation leader who helps enterprises
              modernize operations, embed AI-first innovation, and unlock measurable business value.
              He operates across strategy, architecture, and execution — enabling teams, uplifting
              capabilities, and delivering outcomes that matter.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-soft hover:gap-3 transition-all"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li
                key={s}
                className="glass-card rounded-xl px-5 py-4 text-sm font-medium leading-snug"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="border-y border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
                Value Delivered Across Organizations
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Measurable impact</h2>
            </div>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-soft hover:gap-3 transition-all"
            >
              See impact stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((m) => (
              <div key={m.label} className="glass-card rounded-2xl p-6">
                <div className="font-display text-4xl font-bold text-gradient">{m.value}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career journey */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
          25+ Years of Enterprise Leadership
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Career journey</h2>
        <div className="mt-12 space-y-5">
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
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
            Domains Where Bhanu Has Delivered
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Industries</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
          Testimonials & Social Proof
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by leaders, students & mentees</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="glass-card relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--electric)_0%,_transparent_60%)] opacity-15" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              If you're building the future of your enterprise, Bhanu can help you get there faster.
            </h2>
            <Link
              to="/connect"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-8 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Work with Bhanu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
