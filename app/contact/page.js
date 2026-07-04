import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/ui";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PKS Infratech for project advisory, funding assistance, or heavy machinery on contract. Email pksinghpvtltd@gmail.com or call +91 99199 11669.",
};

const EMAILS = ["pksinghpvtltd@gmail.com", "harshsingh1.in@gmail.com"];
const PHONES = ["+91 99199 11669", "+91 79912 14199"];

function MailIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 3h3l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 013-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="page-contact">
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        subtitle="Whether you need advisory support, funding assistance, or heavy machinery on contract — we'd love to hear about your project."
        bgImage="https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260704_171431_5b39e8bb-6826-421b-aca6-a1c5c722fabe.png"
      />

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Details */}
            <div>
              <Eyebrow>Reach Us</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-navy">
                Pradeep Kumar Singh Infratech Private Limited
              </h2>
              <p className="mt-2 text-sm text-bodygrey">
                ISO 9001:2015 Certified Company
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-navy">
                      Email
                    </p>
                    <ul className="mt-1 space-y-1">
                      {EMAILS.map((e) => (
                        <li key={e}>
                          <a
                            href={`mailto:${e}`}
                            className="text-sm text-bodygrey transition-colors hover:text-brand"
                          >
                            {e}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-navy">
                      Phone
                    </p>
                    <ul className="mt-1 space-y-1">
                      {PHONES.map((p) => (
                        <li key={p}>
                          <a
                            href={`tel:${p.replace(/\s+/g, "")}`}
                            className="text-sm text-bodygrey transition-colors hover:text-brand"
                          >
                            {p}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-brand">
                  Machinery Contract Inquiries (JCB / HDD)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-bodygrey">
                  Call or WhatsApp us directly for availability, rates, and
                  mobilization timelines.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
