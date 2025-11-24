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

const values = [
  "Vendor-neutral and community-powered",
  "Intelligence-driven over tool-led",
  "Future-focused with practical proof",
  "Culture before technology",
  "Inclusive, clear, and confident",
];

const offerings = [
  {
    title: "Community Platform",
    description:
      "A vendor-neutral space for MSP owners, security practitioners, and channel leaders to collaborate.",
  },
  {
    title: "Playbooks & Frameworks",
    description:
      "Downloadable guides, templates, and assessments to operationalize strategy, security, and go-to-market.",
  },
  {
    title: "Events & Roundtables",
    description:
      "Monthly themes, quarterly roundtables, and contributor showcases focused on modern MSP challenges.",
  },
  {
    title: "Research & Perspectives",
    description: "Industry views that stay vendor-neutral and spotlight the evolution toward Managed Intelligence Providers.",
  },
];

const founders = [
  {
    name: "Tycho Löke",
    role: "Founder & Vision Lead",
    bio: "Channel strategist guiding the MSP evolution toward intelligence-driven services and cultural transformation.",
    emphasis: true,
  },
  {
    name: "Pierre Kleine Schaars",
    role: "Co-Founder & Operational Excellence Lead",
    bio: "MSP operator focused on scalable delivery, operational maturity, and secure recurring-value models.",
  },
  {
    name: "Kevin Zwaan",
    role: "Co-Founder & Ethical Hacker / Community Security Lead",
    bio: "Ethical hacker elevating security culture, responsible practices, and vulnerability awareness for MSPs.",
  },
  {
    name: "Ashley Schut",
    role: "Co-Founder & Strategic Ecosystem Lead",
    bio: "Industry connector strengthening collaboration between MSPs, vendors, and communities across the channel.",
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
              Founded 2025 • Netherlands • Vendor-neutral
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Above The Stack
              </h1>
              <p className="text-xl text-muted">
                Shaping the future of the MSP and IT channel.
              </p>
              <p className="text-lg text-foreground/80">
                Above The Stack is a vendor-neutral, MSP-first community led by founder Tycho Löke and co-founders Pierre Kleine Schaars, Kevin Zwaan, and Ashley Schut. We help operators move from tool operators to intelligence partners through mindset, strategy, and culture.
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
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="section-title">Mission & Vision</h2>
            <p className="section-subtitle">Vendor-neutral. MSP-first. Future-focused.</p>
          </div>
          <div className="card-grid md:grid-cols-2">
            <Card
              title="Mission"
              description="To elevate the MSP industry through a vendor-neutral community focused on intelligence, strategy, mindset, and cultural evolution beyond tools alone."
            />
            <Card
              title="Vision"
              description="To become the most trusted collective of minds shaping the future of the IT channel and defining what it means to be a modern service provider."
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="section-title">Values</h2>
            <p className="section-subtitle">Principles that anchor how we build, share, and serve.</p>
          </div>
          <div className="card-surface p-8">
            <ul className="space-y-3 text-foreground/85">
              {values.map((value) => (
                <li key={value}>• {value}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="section-title">Founders & Leadership</h2>
            <p className="section-subtitle">Led by Tycho Löke with co-founders Pierre Kleine Schaars, Kevin Zwaan, and Ashley Schut.</p>
          </div>
          <div className="card-grid md:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <Card
                key={founder.name}
                title={founder.name}
                description={founder.bio}
                tag={founder.role}
                className={founder.emphasis ? "ring-1 ring-accent/40" : undefined}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="section-title">Offerings</h2>
            <p className="section-subtitle">Built for MSP owners, security practitioners, and channel professionals.</p>
          </div>
          <div className="card-grid md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering) => (
              <Card key={offering.title} title={offering.title} description={offering.description} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-surface flex flex-col items-start gap-6 px-8 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Membership model</h3>
            <p className="text-muted">Free community access today. Premium tier coming soon for deeper research, templates, and advisory.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={portalUrl}>Join free</PrimaryButton>
            <SecondaryButton href="/contact">Partner with us</SecondaryButton>
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
