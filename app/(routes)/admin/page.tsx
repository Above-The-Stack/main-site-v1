"use client";

import { FormEvent, useMemo, useState } from "react";
import { Card } from "@/components/Card";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { Section } from "@/components/Section";
import { contributorItems, eventItems, resourceItems } from "@/lib/data";
import { Contributor, EventItem, Resource } from "@/lib/types";

function useClipboardMessage() {
  const [message, setMessage] = useState<string | null>(null);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Copied to clipboard");
    } catch (error) {
      console.error(error);
      setMessage("Unable to copy—please copy manually.");
    }
  };

  return { message, copyText };
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  const [resources, setResources] = useState<Resource[]>(resourceItems);
  const [events, setEvents] = useState<EventItem[]>(eventItems);
  const [contributors, setContributors] = useState<Contributor[]>(contributorItems);

  const [newResource, setNewResource] = useState<Resource>({
    title: "",
    description: "",
    tag: "Playbook",
    href: "",
  });
  const [newEvent, setNewEvent] = useState<EventItem>({
    title: "",
    date: "",
    location: "",
    description: "",
    link: "",
  });
  const [newContributor, setNewContributor] = useState<Contributor>({
    name: "",
    role: "",
    bio: "",
    username: "",
  });

  const { message, copyText } = useClipboardMessage();

  const formattedData = useMemo(
    () => ({ resources, events, contributors }),
    [resources, events, contributors],
  );

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() === "admin" && password === "admin1234!") {
      setIsAuthenticated(true);
      setAuthError(null);
      setPassword("");
      return;
    }

    setAuthError("Invalid credentials. Please try again.");
  };

  const addResource = () => {
    setResources((prev) => [...prev, newResource]);
    setNewResource({ title: "", description: "", tag: "Playbook", href: "" });
  };

  const addEvent = () => {
    setEvents((prev) => [...prev, newEvent]);
    setNewEvent({ title: "", date: "", location: "", description: "", link: "" });
  };

  const addContributor = () => {
    setContributors((prev) => [...prev, newContributor]);
    setNewContributor({ name: "", role: "", bio: "", username: "" });
  };

  if (!isAuthenticated) {
    return (
      <Section>
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Admin</p>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Sign in to continue</h1>
            <p className="text-base text-muted">This portal is restricted to administrators only.</p>
          </div>
          <form onSubmit={handleLogin} className="card-surface space-y-4 p-6">
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="admin-username">
                Username
              </label>
              <input
                id="admin-username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter admin username"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted" htmlFor="admin-password">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
              />
            </div>
            {authError && <p className="text-sm text-accent" role="alert">{authError}</p>}
            <div className="flex gap-3">
              <PrimaryButton type="submit" className="flex-1">
                Sign in
              </PrimaryButton>
              <SecondaryButton href="/" className="flex-1">
                Return home
              </SecondaryButton>
            </div>
          </form>
        </div>
      </Section>
    );
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <Section>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Admin</p>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Content control center.</h1>
          <p className="text-lg text-muted">
            Draft, organize, and export the content that powers Above The Stack. Changes persist locally in this session—copy the JSON to sync with your source of truth.
          </p>
          {message && <p className="text-sm text-accent" aria-live="polite">{message}</p>}
          <div className="flex flex-wrap gap-3">
            <PrimaryButton onClick={() => copyText(JSON.stringify(formattedData, null, 2))}>
              Copy all content
            </PrimaryButton>
            <SecondaryButton href="/">Return home</SecondaryButton>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-muted">Resources</p>
                <p className="text-base text-muted">Playbooks, checklists, and templates.</p>
              </div>
              <SecondaryButton onClick={() => copyText(JSON.stringify(resources, null, 2))}>
                Copy JSON
              </SecondaryButton>
            </div>
            <div className="mt-6 space-y-3">
              <input
                placeholder="Title"
                value={newResource.title}
                onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={newResource.description}
                onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                rows={3}
              />
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  placeholder="Tag"
                  value={newResource.tag}
                  onChange={(e) => setNewResource({ ...newResource, tag: e.target.value })}
                />
                <input
                  placeholder="Link"
                  value={newResource.href}
                  onChange={(e) => setNewResource({ ...newResource, href: e.target.value })}
                />
              </div>
              <PrimaryButton onClick={addResource}>Add resource</PrimaryButton>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {resources.map((resource) => (
                <Card
                  key={`${resource.title}-${resource.tag}`}
                  title={resource.title}
                  description={resource.description}
                  tag={resource.tag}
                  href={resource.href}
                  className="h-full"
                />
              ))}
            </div>
          </div>

          <div className="card-surface p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.15em] text-muted">Events</p>
                <p className="text-base text-muted">AMAs, cohorts, and roundtables.</p>
              </div>
              <SecondaryButton onClick={() => copyText(JSON.stringify(events, null, 2))}>Copy JSON</SecondaryButton>
            </div>
            <div className="mt-6 space-y-3">
              <input
                placeholder="Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  placeholder="Date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
                <input
                  placeholder="Location"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                rows={3}
              />
              <input
                placeholder="Link"
                value={newEvent.link}
                onChange={(e) => setNewEvent({ ...newEvent, link: e.target.value })}
              />
              <PrimaryButton onClick={addEvent}>Add event</PrimaryButton>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {events.map((event) => (
                <Card
                  key={`${event.title}-${event.date}`}
                  title={event.title}
                  description={`${event.date} • ${event.location}`}
                  tag="Upcoming"
                  href={event.link}
                  className="h-full"
                >
                  <p>{event.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card-surface p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted">Contributors</p>
              <p className="text-base text-muted">Manage the humans behind the work.</p>
            </div>
            <SecondaryButton onClick={() => copyText(JSON.stringify(contributors, null, 2))}>
              Copy JSON
            </SecondaryButton>
          </div>
          <div className="mt-6 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <input
                placeholder="Name"
                value={newContributor.name}
                onChange={(e) => setNewContributor({ ...newContributor, name: e.target.value })}
              />
              <input
                placeholder="Role"
                value={newContributor.role}
                onChange={(e) => setNewContributor({ ...newContributor, role: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Bio"
              value={newContributor.bio}
              onChange={(e) => setNewContributor({ ...newContributor, bio: e.target.value })}
              rows={3}
            />
            <input
              placeholder="Username"
              value={newContributor.username}
              onChange={(e) => setNewContributor({ ...newContributor, username: e.target.value })}
            />
            <PrimaryButton onClick={addContributor}>Add contributor</PrimaryButton>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {contributors.map((contributor) => (
              <Card
                key={contributor.username}
                title={contributor.name}
                description={contributor.bio}
                tag={contributor.role}
                href={`https://portal.abovethestack.com/u/${contributor.username}`}
                className="h-full"
              >
                <p className="text-sm text-accent">@{contributor.username}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
