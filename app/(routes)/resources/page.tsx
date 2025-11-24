import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resourceItems } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Resource vault</p>
            <h1 className="section-title">Operator-ready playbooks, checklists, and templates.</h1>
            <p className="section-subtitle">
              Each asset is designed to drop into your operating rhythm—complete with facilitation notes, cadences, and KPIs.
            </p>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-muted">Featured themes</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {["Managed Intelligence", "Automation & AI", "Packaging & pricing", "Culture & leadership"].map((theme) => (
                <div key={theme} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
          {resourceItems.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} tag={item.tag} href={item.href} />
          ))}
        </div>
      </Section>
    </div>
  );
}
