import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { resourceItems } from "@/lib/data";

export default function ResourcesPage() {
  return (
    <div className="space-y-10 md:space-y-14">
      <Section>
        <div className="space-y-3">
          <h1 className="section-title">Resources</h1>
          <p className="section-subtitle">Playbooks, checklists, and frameworks curated for MSP operators.</p>
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
