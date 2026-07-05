import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Quote,
  Download,
  Briefcase,
  Map,
  ShoppingBag,
  Landmark,
  Pickaxe,
  Flame,
  Atom,
  Mail,
  MapPin,
  Linkedin,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import bhanuPortrait from "@/assets/bhanu-portrait.png";
import resume from "@/assets/resume.pdf.asset.json";
import {
  profile,
  proofBar,
  strengths,
  impactMetrics,
  impactStories,
  portfolio,
  prototypes,
  learningPhilosophy,
  companies,
  careerJourney,
  industries,
  testimonials,
  connectOptions,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Index,
});

const industryIcons: Record<string, LucideIcon> = {
  "GIS – Geographical Information System": Map,
  Retail: ShoppingBag,
  Banking: Landmark,
  Mining: Pickaxe,
  "Oil & Gas": Flame,
  "Nano Technologies": Atom,
};

const mentorshipPillars = [
  { icon: Linkedin, title: "LinkedIn Thought Leadership", desc: "AI literacy and transformation insights reaching thousands monthly." },
  { icon: GraduationCap, title: "College Sessions", desc: "Workshops, career guidance, and live builds impacting 1000+ students." },
  { icon: Users, title: "Internal Mentorship", desc: "Structured learning paths and practical, empowering guidance for teams." },
];

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
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-soft">
              <Sparkles className="h-3.5 w-3.5" /> The Executive Who Builds the Future
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building Intelligent Enterprises.{" "}
              <span className="text-gradient">Empowering People. Creating Value.</span>
            </h1>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#portfolio"
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

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
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
            <ul className="grid gap-3 sm:grid-cols-2">
              {strengths.map((s) => (
                <li key={s} className="glass-card rounded-xl px-5 py-4 text-sm font-medium leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <SectionEyebrow>25+ Years of Enterprise Leadership</SectionEyebrow>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Career journey</h3>
          <div className="mt-10 space-y-5">
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
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionEyebrow>Value Delivered Across Organizations</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Measurable impact</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((m) => (
                <div key={m.label} className="glass-card rounded-2xl p-6">
                  <div className="font-display text-4xl font-bold text-gradient">{m.value}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
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
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionEyebrow>Enterprise Transformation Portfolio</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Building AI-first enterprises</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </Reveal>
      </section>

      {/* Prototypes */}
      <section id="prototypes" className="border-y border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionEyebrow>Always Upgrading, Always Building</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Prototype gallery</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionEyebrow>Domains Where Bhanu Has Delivered</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Industries</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.name] ?? Sparkles;
              return (
                <div key={ind.name} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/60 bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionEyebrow>Testimonials & Social Proof</SectionEyebrow>
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
          </Reveal>
        </div>
      </section>

      {/* Learning & Mentorship */}
      <section id="learning" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionEyebrow>Sharing Knowledge Openly</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Learning & mentorship</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {mentorshipPillars.map((p) => (
              <article key={p.title} className="glass-card rounded-2xl p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric/15 text-electric-soft">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </article>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {learningPhilosophy.map((l) => (
              <li key={l} className="glass-card rounded-full px-5 py-2.5 text-sm font-medium">
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Connect */}
      <section id="connect" className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--electric)_0%,_transparent_60%)] opacity-15" />
            <div className="relative">
              <div className="text-center">
                <SectionEyebrow>Work With Bhanu</SectionEyebrow>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                  If you're building the future of your enterprise, let's talk.
                </h2>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {connectOptions.map((c) => (
                    <div key={c.title} className="rounded-2xl border border-border/60 bg-card/30 p-5 backdrop-blur">
                      <h3 className="text-base font-semibold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    </div>
                  ))}
                </div>

                <aside className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/30 p-6 backdrop-blur">
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
                    <span className="text-sm font-medium">linkedin.com/in/bhanu-leader-ai</span>
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
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
