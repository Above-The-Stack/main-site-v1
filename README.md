# Above The Stack

A production-ready Next.js 14 (App Router) site for the Above The Stack platform. The site highlights the community, research, and playbooks for MSPs and IT channel leaders, and integrates with Discourse and SendGrid.

## Tech stack
- Next.js 14 with App Router and TypeScript
- Tailwind CSS 3
- Functional React components with hooks
- Deployed on Vercel

## Getting started
Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

## Environment variables
The following environment variables are used. Only `NEXT_PUBLIC_*` variables are exposed client-side.

- `NEXT_PUBLIC_PORTAL_URL` – Public URL for the Discourse portal (used for links)
- `DISCOURSE_URL` – Base URL of the Discourse instance
- `DISC_API_KEY` – Discourse API key
- `DISC_API_USERNAME` – Discourse API username (e.g. `system`)
- `SENDGRID_API_KEY` – SendGrid API key
- `CONTACT_FROM_EMAIL` – From address for contact emails
- `CONTACT_RECIPIENT_EMAIL` – Recipient for contact emails

## Routes
- `/` – Home
- `/vision`
- `/community` (fetches latest topics via internal API)
- `/resources`
- `/events`
- `/contributors`
- `/contact` (SendGrid-powered form)

API routes live under `app/api/contact` and `app/api/discourse/latest`.
