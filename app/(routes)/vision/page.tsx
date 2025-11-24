import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const themes = [
  {
    title: "AI & Automation in MSPs",
    description: "Practical automation layers across service desk, NOC, onboarding, and customer success.",
  },
  {
    title: "Service Packaging & Recurring Value",
    description: "Designing offers that deliver measurable outcomes and healthy margins month after month.",
  },
  {
    title: "Culture, Talent & Performance",
    description: "Building teams who can experiment, ship improvements, and deliver consistent experiences.",
  },
];

export default function VisionPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="space-y-4">
          <h1 className="section-title">Our Vision</h1>
          <p className="text-lg text-white/80">
            Above The Stack is a vendor-neutral think-tank for MSPs and the broader IT channel. We are here to help operators move from tool operators to intelligence partners.
          </p>
          <p className="text-muted">
            We believe the future belongs to MSPs who orchestrate intelligence—combining data, automation, and culture to create resilient, outcome-driven services.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <h2 className="section-title">Future Themes</h2>
          <p className="section-subtitle">
            Pillars we are actively researching and building with the community.
          </p>
          <div className="card-grid md:grid-cols-3">
            {themes.map((theme) => (
              <Card key={theme.title} title={theme.title} description={theme.description} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
