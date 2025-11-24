"use client";

import { useEffect, useState } from "react";
import { DiscourseTopicList } from "@/components/DiscourseTopicList";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Section } from "@/components/Section";
import { DiscourseTopic } from "@/lib/types";

export default function CommunityPage() {
  const [topics, setTopics] = useState<DiscourseTopic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "#";

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("/api/discourse/latest");
        if (!res.ok) {
          throw new Error("Failed to load topics");
        }
        const data = (await res.json()) as DiscourseTopic[];
        setTopics(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load discussions");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="space-y-4">
          <h1 className="section-title">Community</h1>
          <p className="text-lg text-white/80">
            Join the Above The Stack Discourse portal to meet operators, founders, and channel leaders.
          </p>
          <p className="text-muted">
            Hosted at {portalUrl}. It’s where AMAs, cohorts, and discussions live.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href={portalUrl}>Enter the Portal</PrimaryButton>
            <SecondaryButton href="#latest">Latest Discussions</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-grid md:grid-cols-3">
          {["Join the portal", "Introduce yourself", "Join discussions, AMAs, and cohorts"].map((step, index) => (
            <div key={step} className="card-surface p-6">
              <p className="text-sm font-semibold text-accent">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{step}</h3>
              <p className="mt-2 text-muted">
                {index === 0 && "Create your account to unlock the community."}
                {index === 1 && "Share your focus areas so peers can collaborate."}
                {index === 2 && "Join in on live AMAs, cohorts, and daily discussions."}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="latest">
        <div className="space-y-4">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="section-title">Latest Discussions</h2>
              <p className="section-subtitle">Pulled directly from the community portal.</p>
            </div>
            <PrimaryButton href={portalUrl} target="_blank" rel="noreferrer">
              Open Community
            </PrimaryButton>
          </div>
          <DiscourseTopicList
            topics={topics}
            loading={loading}
            error={error}
            portalUrl={portalUrl}
          />
        </div>
      </Section>
    </div>
  );
}
