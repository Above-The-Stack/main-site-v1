"use client";

import { FormEvent, useState } from "react";
import { PrimaryButton } from "@/components/Buttons";
import { Section } from "@/components/Section";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setStatusType(null);

    if (!emailRegex.test(email.trim())) {
      setStatus("Please provide a valid email address.");
      setStatusType("error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({ error: "Failed to send" }))) as {
          error?: string;
        };
        throw new Error(error || "Failed to send");
      }

      setStatus("Thank you for reaching out! We'll get back to you soon.");
      setStatusType("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error(error);
      const message = error instanceof Error ? error.message : "We couldn't send your message.";
      setStatus(message || "We couldn't send your message.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 md:space-y-14">
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Contact</p>
            <h1 className="text-4xl font-semibold text-foreground md:text-5xl">Tell us where you want to take your MSP.</h1>
            <p className="text-lg text-muted">
              Share your goals and challenges—we’ll connect you with the right resources, cohorts, or advisory support.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {["Packaging & pricing", "Automation & AI", "Culture & leadership", "Client experience"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="company">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="message">
                    What should we prioritize?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share context, timelines, or the outcomes you’re targeting."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                <PrimaryButton type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </PrimaryButton>
                {status && (
                  <p
                    className={statusType === "success" ? "text-sm text-green-400" : "text-sm text-red-400"}
                    role="status"
                    aria-live="polite"
                  >
                    {status}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
