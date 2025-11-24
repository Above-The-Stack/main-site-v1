import Link from "next/link";
import { DiscourseTopic } from "@/lib/types";
import { formatRelativeTime } from "@/lib/time";

interface DiscourseTopicListProps {
  topics: DiscourseTopic[];
  loading?: boolean;
  error?: string | null;
  portalUrl?: string;
}

export function DiscourseTopicList({ topics, loading, error, portalUrl }: DiscourseTopicListProps) {
  const resolvedPortalUrl = portalUrl || "https://portal.abovethestack.com";

  if (loading) {
    return <p className="text-muted">Loading latest discussions…</p>;
  }

  if (error) {
    return (
      <p className="text-red-300">
        We couldn&apos;t load the latest discussions right now. Please try again shortly.
      </p>
    );
  }

  if (!topics.length) {
    return <p className="text-muted">No discussions yet. Be the first to start a conversation.</p>;
  }

  return (
    <div className="space-y-3">
      {topics.map((topic) => (
        <Link
          key={topic.id}
          href={`${resolvedPortalUrl}/t/${topic.slug}/${topic.id}`}
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-border/80 bg-surface/80 p-4 transition hover:-translate-y-0.5 hover:border-accent/80 hover:shadow-subtle"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
            <span className="text-xs text-muted">{formatRelativeTime(topic.last_posted_at || topic.created_at)}</span>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1 rounded-full bg-card/60 px-3 py-1 text-white/80">
              Replies: {topic.reply_count}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-card/60 px-3 py-1 text-white/80">
              Posts: {topic.posts_count}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
