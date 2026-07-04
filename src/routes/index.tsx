import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroBg from "@/assets/hero-bg.jpg";
import {
  proofBar,
  strengths,
  impactMetrics,
  prototypes,
  testimonials,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt="Enterprise AI network visualization"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/80 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:py-36">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-soft">
              <Sparkles className="h-3.5 w-3.5" /> The Executive Who Builds the Future
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-6xl">
              Bhanu transforms enterprises by blending{" "}
              <span className="text-gradient">strategy, technology, and human enablement.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Driving digital transformation, AI adoption, and stakeholder value across global
              organizations — from strategy and architecture to hands-on execution.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
              >
                Connect with Bhanu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:border-electric"
              >
                Explore His Work
              </Link>
            </div>
          </div>
        </div>

        {/* Proof bar */}
        <div className="relative border-t border-border/60 bg-navy-deep/80 backdrop-blur">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-2 lg:grid-cols-4">
            {proofBar.map((p) => (
              <div key={p.label} className="px-4 py-6 text-center">
                <div className="font-display text-3xl font-bold text-gradient">{p.value}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{p.label}</div>
              </div>
            ))}
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

      {/* Prototypes preview */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-soft">
              Always Upgrading, Always Building
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A learner's mindset</h2>
          </div>
          <Link
            to="/prototypes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric-soft hover:gap-3 transition-all"
          >
            View prototype gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {prototypes.slice(0, 6).map((p) => (
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
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
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
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
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
