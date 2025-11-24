import { Card } from "@/components/Card";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "Community",
    description: "Peer discussions, AMAs, and cohorts built for MSP operators to exchange what works.",
  },
  {
    title: "Research",
    description: "Insights, frameworks, and maturity models that stay vendor-neutral and practitioner-led.",
  },
  {
    title: "Playbooks",
    description: "Practical PDFs, templates, and checklists you can deploy with your teams this quarter.",
  },
];

export default function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

  return (
    <div className="space-y-16 md:space-y-20">
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              Vendor-neutral. MSP-first. Future-focused.
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Above The Stack
              </h1>
              <p className="text-xl text-muted">
                Shaping the future of the MSP and IT Channel.
              </p>
              <p className="text-lg text-foreground/80">
                Above The Stack is a vendor-neutral, MSP-first community and content platform built for operators who want to level up from tool operators to intelligence partners.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <PrimaryButton href={portalUrl}>Join the Community</PrimaryButton>
              <SecondaryButton href="/resources">Explore Resources</SecondaryButton>
            </div>
          </div>
          <div className="card-surface relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-surface/40" />
            <div className="relative space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">The MSP evolution</h2>
              <p className="text-muted">
                We believe the next generation of MSPs will operate as Managed Intelligence Providers (MIPs)—trusted partners who combine automation, data, and culture to deliver recurring outcomes.
              </p>
              <ul className="space-y-2 text-foreground/85">
                <li>• Modern service packaging and recurring value.</li>
                <li>• AI-assisted delivery across the lifecycle.</li>
                <li>• Communities of practice that share playbooks and proof.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="section-title">The Three Pillars</h2>
            <p className="section-subtitle">
              Everything we build lives at the intersection of community, research, and practical execution.
            </p>
          </div>
          <div className="card-grid md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} title={pillar.title} description={pillar.description} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="section-title">Why Above The Stack</h2>
            <p className="section-subtitle">
              A platform designed for MSPs who want to build healthier businesses and future-ready teams.
            </p>
          </div>
          <div className="card-grid md:grid-cols-3">
            <Card
              title="Vendor-neutral"
              description="No sales pitches—just honest dialogue, research, and operator proof points."
            />
            <Card
              title="MSP culture first"
              description="We obsess over team health, repeatable delivery, and business model resilience."
            />
            <Card
              title="Future-oriented"
              description="Championing the Managed Intelligence Provider concept to keep you ahead of the curve."
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-surface flex flex-col items-start gap-6 px-8 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Ready to go above the stack?</h3>
            <p className="text-muted">Join the conversation or reach out to plan something together.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/community">Explore the Community</PrimaryButton>
            <SecondaryButton href="/contact">Contact Us</SecondaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
