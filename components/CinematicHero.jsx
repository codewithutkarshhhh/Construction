import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

/**
 * CinematicHero — the home hero, floating on glass over the 4K building stage.
 *
 * Keeps the exact headline, copy and CTAs of the original hero, restyled for
 * the light cinematic backdrop: navy display type on a frosted glassmorphism
 * panel, with the blueprint tower visible behind and a scroll cue inviting the
 * visitor into the assembly sequence.
 */

function ArrowRight({ className = "" }) {
  return (
    <svg
      width="18"
      height="18"
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

export default function CinematicHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
        {/* Frosted glass panel the headline floats on */}
        <div className="relative rounded-[32px] border border-white/70 bg-white/45 px-6 py-12 text-center shadow-[0_40px_120px_-40px_rgba(15,27,51,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl sm:px-12 sm:py-16">
          {/* subtle top glow line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
          />

          <span className="inline-flex items-center gap-3 rounded-full border border-brand/15 bg-white/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            PKS Infratech
          </span>

          <h1 className="mt-8 text-[clamp(2.5rem,8vw,6.5rem)] uppercase leading-[1.02] tracking-tight">
            <TextGenerateEffect
              words="Building Infrastructure."
              className="block text-navy"
              duration={0.6}
            />
            <TextGenerateEffect
              words="Creating Enduring Value."
              className="mt-1 block text-brand"
              duration={0.6}
            />
          </h1>

          {/* double-dash divider */}
          <div
            className="animate-fade-up mt-7 flex items-center justify-center gap-2"
            style={{ animationDelay: "0.2s" }}
            aria-hidden="true"
          >
            <span className="h-[3px] w-5 rounded-full bg-brand" />
            <span className="h-[3px] w-5 rounded-full bg-brand" />
          </div>

          <p
            className="animate-fade-up mx-auto mt-7 max-w-prose leading-relaxed text-navy/70"
            style={{ animationDelay: "0.28s" }}
          >
            PKS Infratech is an infrastructure development and advisory firm
            committed to delivering sustainable growth through expert guidance,
            strategic partnerships, and disciplined execution.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_18px_40px_-14px_rgba(30,74,156,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
            >
              OUR SERVICES
              <ArrowRight />
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-navy/25 bg-white/50 px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-navy backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 sm:w-auto"
            >
              ABOUT US
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue — the page scroll drives the building assembly */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex h-9 w-[22px] items-start justify-center rounded-full border-2 border-navy/25 p-1">
          <div className="home-scroll-dot h-2 w-1 rounded-full bg-brand" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-navy/45">
          Scroll to build
        </span>
      </div>
    </section>
  );
}
