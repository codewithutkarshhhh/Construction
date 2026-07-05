import Link from "next/link";
import { CLIENTS } from "./ClientLogos";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

const EMAILS = ["pksinghpvtltd@gmail.com", "harshsingh1.in@gmail.com"];
const PHONES = ["+91 99199 11669", "+91 79912 14199"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <svg width="44" height="44" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                <rect x="1.5" y="1.5" width="49" height="49" rx="12" stroke="#7CB3FF" strokeOpacity="0.5" strokeWidth="2" />
                <rect x="14" y="26" width="6.5" height="16" rx="1.5" fill="#7CB3FF" />
                <rect x="22.75" y="18" width="6.5" height="24" rx="1.5" fill="#7CB3FF" />
                <rect x="31.5" y="11" width="6.5" height="31" rx="1.5" fill="#7CB3FF" />
              </svg>
              <div className="leading-tight">
                <p className="text-sm font-bold uppercase tracking-wide text-white">
                  Pradeep Kumar Singh
                </p>
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/70">
                  Infratech Private Limited
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70">
              ISO 9001:2015 Certified Company · Registered in 2012
            </p>
            <p className="mt-2 text-sm font-medium text-sky-300">
              Building Infrastructure. Creating Enduring Value.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-sky-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {EMAILS.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`} className="text-white/70 transition-colors hover:text-sky-300">
                    {e}
                  </a>
                </li>
              ))}
              {PHONES.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s+/g, "")}`}
                    className="text-white/70 transition-colors hover:text-sky-300"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Clients strip */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Our Clients
          </p>
          <p className="mt-3 text-sm text-white/70">
            {CLIENTS.map((c) => c.name).join(" · ")}
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Pradeep Kumar Singh Infratech Private
          Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
