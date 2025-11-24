import { NextResponse } from "next/server";

export async function GET() {
  const { DISCOURSE_URL, DISC_API_KEY, DISC_API_USERNAME } = process.env;

  if (!DISCOURSE_URL || !DISC_API_KEY || !DISC_API_USERNAME) {
    return NextResponse.json(
      { error: "Discourse environment variables are not configured." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${DISCOURSE_URL}/latest.json`, {
      headers: {
        "Api-Key": DISC_API_KEY,
        "Api-Username": DISC_API_USERNAME,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch discussions" }, { status: response.status });
    }

    const payload = await response.json();
    const topics = payload?.topic_list?.topics ?? [];

    const simplified = topics.map(
      (topic: {
        id: number;
        title: string;
        slug: string;
        posts_count: number;
        reply_count: number;
        created_at: string;
        last_posted_at: string;
      }) => ({
        id: topic.id,
        title: topic.title,
        slug: topic.slug,
        posts_count: topic.posts_count,
        reply_count: topic.reply_count,
        created_at: topic.created_at,
        last_posted_at: topic.last_posted_at,
      }),
    );

    return NextResponse.json(simplified);
  } catch (error) {
    console.error("Discourse latest error", error);
    return NextResponse.json({ error: "Unable to load latest discussions" }, { status: 502 });
  }
}
