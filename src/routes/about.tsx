import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { strengths } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhanu Rawal | Enterprise Transformation Leader" },
      {
        name: "description",
        content:
          "Bhanu Rawal is a global technology and product leader with 25+ years shaping AI and digital transformation across enterprises, safety, and compliance.",
      },
      { property: "og:title", content: "About Bhanu Rawal" },
      {
        property: "og:description",
        content: "Global technology and digital transformation leader driving AI adoption and value.",
      },
    ],
  }),
  component: About,
});

const experience = [
  {
    role: "Digitalization Lead (Generative AI & ML)",
    org: "Shell India Market Pvt. Ltd., Bangalore",
    period: "2024 – Present",
    points: [
      "Directed enterprise-scale deployment of machine-vision AI, reducing incidents by 30%+.",
      "Drove AI-powered solutions and data analytics platforms saving $14M per annum.",
      "Established a GenAI innovation lifecycle (Azure OpenAI, M365 AI Builder) with $200K cost avoidance.",
      "Built an AI delivery operating model: intake → prioritization → governance → release.",
    ],
  },
  {
    role: "Product Manager",
    org: "Shell India Market Pvt. Ltd., Bangalore",
    period: "2016 – 2023",
    points: [
      "Implemented portfolio prioritization frameworks supporting $20M savings (Sphera SaaS).",
      "Directed the Sphera environmental compliance product, saving $3M in technical debt.",
      "Built KPI dashboards tracking adoption, compliance, and performance.",
      "Defined access governance and least-privilege controls across global teams.",
    ],
  },
  {
    role: "Architect / Consultant",
    org: "IBM & other consulting companies — Bangalore, Sweden",
    period: "1999 – 2016",
    points: [
      "Embedded compliance-by-design across ERP implementations, saving millions in avoided fines.",
      "Directed innovation initiatives, including a mobile HR app improving efficiency by 30%.",
      "Ran multi-stream enterprise delivery, driving 5–10% service cost reduction.",
      "Acted as a trusted advisor integrating business rules and compliance into product design.",
    ],
  },
];

const education = [
  { title: "Post Graduate Program in AI & Machine Learning", org: "Texas McCombs School of Business", period: "2023 – 2024" },
  { title: "Digital Transformation Executive Certificate", org: "IIM Indore", period: "2021 – 2022" },
  { title: "Bachelor of Arts (Mathematics)", org: "Delhi University", period: "1995 – 1998" },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Bhanu"
        title="An authentic leader of AI & digital innovation"
        intro="A global technology and product leader with extensive experience guiding cross-functional teams to deliver scalable AI and digital products across global businesses — aligning innovation with safety, compliance, and operational excellence."
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Professional experience</h2>
            <div className="mt-8 space-y-8">
              {experience.map((e) => (
                <div key={e.role} className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="text-xs font-semibold text-electric-soft">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold">Executive strengths</h2>
              <ul className="mt-6 space-y-2.5">
                {strengths.map((s) => (
                  <li key={s} className="glass-card rounded-xl px-4 py-3 text-sm font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Education</h2>
              <div className="mt-6 space-y-4">
                {education.map((ed) => (
                  <div key={ed.title} className="glass-card rounded-xl p-4">
                    <h3 className="text-sm font-semibold leading-snug">{ed.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{ed.org} · {ed.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/connect"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric-soft to-electric px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
            >
              Work with Bhanu <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
