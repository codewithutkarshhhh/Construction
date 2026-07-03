"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "HOME", href: "#", active: true },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "SECTORS", href: "#sectors" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CAREERS", href: "#careers" },
  { label: "CONTACT US", href: "#contact" },
];

function ArrowRight({ className = "" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={`relative whitespace-nowrap text-[13px] font-medium tracking-[0.12em] transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none ${
                    item.active
                      ? "text-brand after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-brand after:content-['']"
                      : "text-navy/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand px-5 py-2 text-[13px] font-semibold tracking-[0.1em] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            GET IN TOUCH
            <ArrowRight />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-slate-200 bg-white px-5 pb-6 pt-2 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-slate-100 py-3 text-sm font-medium tracking-[0.12em] ${
                    item.active ? "text-brand" : "text-navy/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand px-5 py-3 text-sm font-semibold tracking-[0.1em] text-brand transition-colors hover:bg-brand hover:text-white"
          >
            GET IN TOUCH
            <ArrowRight />
          </a>
        </nav>
      )}
    </header>
  );
}
