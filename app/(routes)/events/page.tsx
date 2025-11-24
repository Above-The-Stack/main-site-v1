import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { eventItems } from "@/lib/data";

export default function EventsPage() {
  const sortedEvents = [...eventItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Events & cohorts</p>
            <h1 className="section-title">Curated live experiences for operators.</h1>
            <p className="section-subtitle">
              AMAs, workshops, and roundtables built around MSP evolution, channel strategy, security, and culture—always vendor-neutral and community-led.
            </p>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-muted">What to expect</p>
            <ul className="mt-4 space-y-3 text-muted">
              <li>• Practical sessions with templates you can copy.</li>
              <li>• Operator-only rooms—no vendor pitches.</li>
              <li>• Access to recordings, recaps, and registration links in the portal.</li>
              <li>• Monthly themed discussions and quarterly roundtables.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-grid md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event) => (
            <Card
              key={event.title}
              title={event.title}
              description={`${new Date(event.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })} • ${event.location}`}
              tag="Upcoming"
              href={event.link}
            >
              <p>{event.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
