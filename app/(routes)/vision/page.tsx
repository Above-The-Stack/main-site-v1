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

const values = [
  "Vendor-neutrality: what’s best for providers and customers comes before tools.",
  "Intelligence-driven: insight, analysis, and advisory value over tickets and noise.",
  "Community-powered: practitioners lead the conversation, not vendors.",
  "Future-focused: built for the next 2–5 years of the channel, not last year’s playbook.",
  "Practical over theoretical: playbooks, checklists, and action steps you can ship.",
  "Culture before technology: people, mindset, and leadership as the differentiator.",
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
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Mission</p>
            <h2 className="section-title">Elevate the MSP industry above the tool stack.</h2>
            <p className="section-subtitle">
              We create a vendor-neutral space where leaders, operators, and practitioners can think beyond their tooling, share intelligence, and access concrete playbooks that drive modern service delivery.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Vision</p>
            <div className="card-surface p-6">
              <p className="text-lg text-foreground">
                The most trusted collective of minds shaping the future of the IT channel and defining what it means to be a modern service provider.
              </p>
              <p className="mt-3 text-muted">
                We aim to be the reference for evolving into a Managed Intelligence Provider (MIP) with services, culture, and strategy built for the next decade.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          <h2 className="section-title">Core values</h2>
          <p className="section-subtitle">The principles guiding our playbooks, events, and community interactions.</p>
          <div className="grid gap-3 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                {value}
              </div>
            ))}
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
