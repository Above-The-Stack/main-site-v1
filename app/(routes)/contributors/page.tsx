import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { contributorItems, founderItems } from "@/lib/data";

export default function ContributorsPage() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Contributors</p>
            <h1 className="section-title">Founders, operators, and community hosts.</h1>
            <p className="section-subtitle">
              Meet the leadership shaping Above The Stack and the practitioners who keep the research, events, and playbooks grounded in real MSP work.
            </p>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-muted">Follow along</p>
            <p className="mt-3 text-muted">
              Contributor profiles live in the portal. Follow them to join AMAs, cohorts, and research threads.
            </p>
            <Link
              href={portalUrl}
              className="mt-4 inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-accent hover:border-accent/60"
            >
              Open the portal
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Founders</p>
          <h2 className="section-title">A unified founding team led by Tycho Löke.</h2>
          <p className="section-subtitle">
            Tycho sets the long-term vision and MSP 1.0 → MIP frameworks, while Pierre, Kevin, and Ashley bring operational, security, and ecosystem muscle to the platform.
          </p>
        </div>
        <div className="card-grid md:grid-cols-2 lg:grid-cols-4">
          {founderItems.map((founder) => (
            <Card
              key={founder.username}
              title={founder.name}
              description={founder.bio}
              tag={founder.role}
              href={`${portalUrl}/u/${founder.username}`}
            >
              <Link
                href={`${portalUrl}/u/${founder.username}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                View profile
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
          {contributorItems.map((contributor) => (
            <Card
              key={contributor.username}
              title={contributor.name}
              description={contributor.bio}
              tag={contributor.role}
              href={`${portalUrl}/u/${contributor.username}`}
            >
              <Link
                href={`${portalUrl}/u/${contributor.username}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                View profile
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
