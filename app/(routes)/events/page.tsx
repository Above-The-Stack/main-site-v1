import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { eventItems } from "@/lib/data";

export default function EventsPage() {
  const sortedEvents = [...eventItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div className="space-y-10 md:space-y-14">
      <Section>
        <div className="space-y-3">
          <h1 className="section-title">Events</h1>
          <p className="section-subtitle">Upcoming AMAs, cohorts, and roundtables built with the community.</p>
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
