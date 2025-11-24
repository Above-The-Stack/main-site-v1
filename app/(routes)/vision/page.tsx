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
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Vision</p>
            <h1 className="section-title">Building the Managed Intelligence future.</h1>
            <p className="text-lg text-muted">
              Above The Stack is a vendor-neutral think-tank for MSPs and the broader channel. We help operators move from tool operators to intelligence partners.
            </p>
            <p className="text-muted">
              We believe the future belongs to MSPs who orchestrate intelligence—combining data, automation, and culture to create resilient, outcome-driven services.
            </p>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-muted">What drives us</p>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Operators deserve vendor-neutral research and peer validation.</li>
              <li>• Modern MSPs need polished assets and experiments—not theory.</li>
              <li>• Community should feel like an extension of your leadership team.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <h2 className="section-title">Future themes</h2>
          <p className="section-subtitle">Pillars we are actively researching and building with the community.</p>
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
