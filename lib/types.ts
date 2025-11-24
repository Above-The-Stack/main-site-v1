export type Resource = {
  title: string;
  description: string;
  tag: string;
  href: string;
};

export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
};

export type Contributor = {
  name: string;
  role: string;
  bio: string;
  username: string;
};

export type DiscourseTopic = {
  id: number;
  title: string;
  slug: string;
  posts_count: number;
  reply_count: number;
  created_at: string;
  last_posted_at: string;
};
