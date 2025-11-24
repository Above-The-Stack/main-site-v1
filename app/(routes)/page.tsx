import { Card } from "@/components/Card";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Section } from "@/components/Section";

const pillars = [
  {
    title: "Community Ops",
    description: "Peer AMAs, cohorts, and curated rooms that keep operators connected to what actually works.",
  },
  {
    title: "Research",
    description: "Field notes, benchmarks, and maturity models built with MSP leaders—not vendors.",
  },
  {
    title: "Execution",
    description: "Implementation playbooks, templates, and cadences you can drop into your operating system this quarter.",
  },
];

const proofPoints = [
  {
    title: "Operator-grade content",
    description: "Every guide is built with active MSP founders and operators. No fluff, no filler—just systems you can use now.",
  },
  {
    title: "Modern service design",
    description: "We translate the Managed Intelligence Provider mindset into offers, automation layers, and client outcomes.",
  },
  {
    title: "Execution-first assets",
    description: "Presentation-ready templates, cadences, and enablement assets that keep early teams moving.",
  },
];

const programs = [
  {
    title: "Cohorts & roundtables",
    description: "Small-group sessions where founding members test packaging, pricing, and delivery ideas together.",
    tag: "Live",
  },
  {
    title: "Resource vault",
    description: "Four launch playbooks plus checklists and templates that will expand with every new release.",
    tag: "On-demand",
  },
  {
    title: "Executive advisory",
    description: "Early advisory conversations focused on productizing services, culture, and automation experiments.",
    tag: "Invite-only",
  },
];

const metrics = [
  { label: "Founding members", value: "4" },
  { label: "Playbooks available", value: "4" },
  { label: "Live sessions scheduled", value: "3" },
];

export default function HomePage() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

  return (
    <div className="space-y-10 md:space-y-16">
      <Section className="pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-cta" />
              Vendor-neutral. MSP-first. Unapologetically modern.
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Above The Stack is a newly founded collective for Managed Intelligence Providers.
              </h1>
              <p className="text-lg text-muted md:text-xl">
                We’re starting with four founders, four launch playbooks, and a clear focus on helping MSPs redesign services, automate intelligently, and operate with polish.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton href={portalUrl}>Join the community</PrimaryButton>
              <SecondaryButton href="/vision">See the vision</SecondaryButton>
              <p className="text-sm text-muted">Instant access • Curated peers • Zero vendor noise</p>
            </div>
          </div>
          <div className="card-surface relative grid gap-6 p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-accent/10 via-cta/5 to-white/5 p-6 shadow-subtle">
              <p className="text-sm uppercase tracking-[0.15em] text-muted">The Managed Intelligence Play</p>
              <p className="mt-3 text-lg text-foreground">
                Move from reactive support to proactive intelligence partner. Combine automation, data, and culture to deliver outcomes with confidence.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full bg-white/5 px-3 py-1">Modern packaging</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Automation & AI</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Communities of proof</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Three pillars</p>
            <h2 className="section-title">Everything is built for operators</h2>
            <p className="section-subtitle">
              From the first interview to the last template, our focus is on helping MSP teams execute with clarity and confidence.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-accent">{pillar.title}</p>
                  <p className="mt-2 text-sm text-muted">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-grid md:grid-cols-3">
            {proofPoints.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Programs</p>
              <h2 className="section-title">Ship-ready experiences</h2>
              <p className="section-subtitle">Choose the mix of live, asynchronous, and advisory support that fits your team.</p>
            </div>
            <SecondaryButton href="/events">View calendar</SecondaryButton>
          </div>
          <div className="card-grid md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} title={program.title} description={program.description} tag={program.tag} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-surface flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Next step</p>
            <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Ready to operate above the stack?</h3>
            <p className="text-muted">
              Join the portal, meet the operators, and start shipping better services with professional-grade assets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={portalUrl}>Enter the portal</PrimaryButton>
            <SecondaryButton href="/contact">Talk with us</SecondaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
