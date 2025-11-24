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
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.abovethestack.com";

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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Community Portal</p>
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">A curated room for operators, founders, and channel leaders.</h1>
            <p className="text-lg text-muted">
              Join live AMAs, contribute to field research, and collaborate on playbooks with peers who are building the Managed Intelligence Provider model.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton href={portalUrl}>Enter the Portal</PrimaryButton>
              <SecondaryButton href="#latest">Latest Discussions</SecondaryButton>
            </div>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">How it works</p>
            <div className="mt-6 space-y-4">
              {["Create your profile", "Share your focus areas", "Join AMAs, cohorts, and daily threads"].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-accent">Step {index + 1}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{step}</p>
                  <p className="text-sm text-muted">
                    {index === 0 && "Securely log in to the Discourse portal in seconds."}
                    {index === 1 && "Let peers know your industry, tools, and outcomes you care about."}
                    {index === 2 && "Jump into live conversations or replay threads with bookmarked insights."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="latest">
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted">Live pulse</p>
              <h2 className="section-title">Latest Discussions</h2>
              <p className="section-subtitle">Fresh topics pulled directly from the Above The Stack Discourse portal.</p>
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
