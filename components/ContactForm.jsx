"use client";

import { useState } from "react";
import { ArrowRight } from "./ui";

const INQUIRY_TYPES = [
  "Project Advisory",
  "Machinery on Contract",
  "Careers",
  "General Inquiry",
];

const TO_EMAIL = "pksinghpvtltd@gmail.com";

const FIELD =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const LABEL = "block text-sm font-semibold text-navy";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: INQUIRY_TYPES[0],
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website Inquiry: ${form.inquiry}${
      form.name ? ` — ${form.name}` : ""
    }`;
    const body = [
      `Full Name: ${form.name}`,
      `Company Name: ${form.company}`,
      `Email: ${form.email}`,
      `Phone Number: ${form.phone}`,
      `Inquiry Type: ${form.inquiry}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your full name"
            className={`mt-2 ${FIELD}`}
          />
        </div>
        <div>
          <label htmlFor="company" className={LABEL}>
            Company Name
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={update("company")}
            placeholder="Your organization"
            className={`mt-2 ${FIELD}`}
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={`mt-2 ${FIELD}`}
          />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 00000 00000"
            className={`mt-2 ${FIELD}`}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="inquiry" className={LABEL}>
            Inquiry Type
          </label>
          <select
            id="inquiry"
            value={form.inquiry}
            onChange={update("inquiry")}
            className={`mt-2 ${FIELD}`}
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={LABEL}>
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us about your project or requirement…"
            className={`mt-2 ${FIELD}`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
      >
        SEND MESSAGE
        <ArrowRight />
      </button>
      <p className="mt-3 text-xs text-slate-400">
        Submitting opens your email app with the details pre-filled, addressed to
        our team.
      </p>
    </form>
  );
}
