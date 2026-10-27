"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowRight } from "./Icons";
import styles from "./ContactForm.module.css";

const TOPICS = [
  "Product question",
  "General enquiry",
  "Partnership",
  "Press",
  "Something else",
] as const;

/**
 * There is no mail backend wired up yet, so this composes the message and
 * hands it to the visitor's own mail client rather than faking a success
 * state. To send server-side later, POST these fields to a route handler at
 * app/api/contact/route.ts and swap `handoff` for the fetch — the markup,
 * validation and states below do not need to change.
 */
export default function ContactForm() {
  const [handedOff, setHandedOff] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `${topic} — ${name}`;
    const body = [
      message,
      "",
      "—",
      `Name:  ${name}`,
      `Email: ${from}`,
      `Topic: ${topic}`,
      `Sent from ${site.domain}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setHandedOff(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <p className={`mono ${styles.formHead}`}>Compose a message</p>

      <div className={styles.field}>
        <label htmlFor="name" className="mono">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Adaeze Okafor"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className="mono">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="topic" className="mono">
          Topic
        </label>
        <div className={styles.selectWrap}>
          <select id="topic" name="topic" defaultValue={TOPICS[0]} required>
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg
            className={styles.selectChev}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M1 1.25 5 5.25 9 1.25" />
          </svg>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className="mono">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Which of the six products would you move over first, and what are you using for it today?"
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn">
          Open in mail app
          <ArrowRight />
        </button>
        <p className={`mono ${styles.hint}`} role="status">
          {handedOff
            ? `Your mail app should now be open. If nothing happened, email ${site.email} directly.`
            : `This opens your own mail client with the message ready to send.`}
        </p>
      </div>
    </form>
  );
}
