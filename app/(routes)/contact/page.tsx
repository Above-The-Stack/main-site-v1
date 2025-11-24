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
        <div className="space-y-3">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">Tell us about your team, challenges, or ideas for the community.</p>
        </div>
      </Section>

      <Section>
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your goals, challenges, or ideas."
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <PrimaryButton type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </PrimaryButton>
              {status && (
                <p
                  className={statusType === "success" ? "text-sm text-green-600" : "text-sm text-red-500"}
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
