"use client";

import Link from "next/link";
import { Home, Building2, HardHat, Users, Phone } from "lucide-react";
import Logo from "./Logo";
import { NavBar } from "@/components/ui/tubelight-navbar";

const NAV_ITEMS = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Building2 },
  { name: "Services", url: "/services", icon: HardHat },
  { name: "Clients", url: "/clients", icon: Users },
  { name: "Contact", url: "/contact", icon: Phone },
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
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Logo />

          <Link
            href="/contact"
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand px-5 py-2 text-[13px] font-semibold tracking-[0.1em] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:inline-flex"
          >
            GET IN TOUCH
            <ArrowRight />
          </Link>
        </div>
      </header>

      {/* Primary navigation — floating "tubelight" pill (top on desktop,
          bottom on mobile). Replaces the previous inline links + hamburger. */}
      <NavBar items={NAV_ITEMS} />
    </>
  );
}
