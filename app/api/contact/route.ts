import { NextResponse } from "next/server";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

export async function POST(request: Request) {
  const { SENDGRID_API_KEY, CONTACT_FROM_EMAIL, CONTACT_RECIPIENT_EMAIL } = process.env;

  if (!SENDGRID_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_RECIPIENT_EMAIL) {
    return NextResponse.json(
      { error: "Server email configuration is missing." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const company = body?.company?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg: MailDataRequired = {
      to: CONTACT_RECIPIENT_EMAIL,
      from: CONTACT_FROM_EMAIL,
      replyTo: email,
      subject: `New Above The Stack contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("SendGrid error", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
