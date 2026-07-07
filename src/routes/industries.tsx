import { createFileRoute } from "@tanstack/react-router";
import {
  Map,
  ShoppingBag,
  Landmark,
  Pickaxe,
  Flame,
  Atom,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Bhanu Rawal | Domains of Delivery" },
      {
        name: "description",
        content:
          "Industries where Bhanu Rawal has delivered transformation: GIS, Retail, Banking, Mining, Oil & Gas, and Nano Technologies.",
      },
      { property: "og:title", content: "Industries — Bhanu Rawal" },
      { property: "og:description", content: "GIS, Retail, Banking, Mining, Oil & Gas, and Nano Technologies." },
    ],
  }),
  component: Industries,
});

const industryIcons: Record<string, LucideIcon> = {
  "GIS – Geographical Information System": Map,
  Retail: ShoppingBag,
  Banking: Landmark,
  Mining: Pickaxe,
  "Oil & Gas": Flame,
  "Nano Technologies": Atom,
};

function Industries() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Domains Where Bhanu Has Delivered"
        title="Industries"
        intro="Cross-industry depth — from geospatial platforms to safety-critical operations — applied to unlock measurable value wherever transformation is needed."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </SiteLayout>
  );
}
