import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { contributorItems } from "@/lib/data";

export default function ContributorsPage() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

  return (
    <div className="space-y-10 md:space-y-14">
      <Section>
        <div className="space-y-3">
          <h1 className="section-title">Contributors</h1>
          <p className="section-subtitle">
            Founders, security leaders, and community practitioners shaping Above The Stack.
          </p>
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
