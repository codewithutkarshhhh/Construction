import Image from "next/image";

/* 4K hero background — aerial night city-traffic light trails.
   Generated with Higgsfield (Nano Banana Pro, 5504x3072). */
const HERO_BG_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_183914_494e037f-eaf4-4810-be4a-f380af0483b6.png";

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

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* 4K background — aerial city-traffic light trails */}
      <Image
        src={HERO_BG_URL}
        alt=""
        aria-hidden="true"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      {/* navy gradient overlay for headline legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/85"
      />

      {/* faint decorative geometric pattern, corners only */}
      <div
        aria-hidden="true"
        className="hero-pattern pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute right-8 top-24 h-24 w-32 opacity-40"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute left-8 bottom-10 hidden h-24 w-32 opacity-40 sm:block"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-16 text-center sm:px-8 sm:pt-24 lg:pb-24">
        <h1 className="uppercase tracking-tight drop-shadow-lg">
          <span className="animate-fade-up block text-white">Building Infrastructure.</span>
          <span
            className="animate-fade-up mt-1 block text-sky-300"
            style={{ animationDelay: "0.12s" }}
          >
            Creating Enduring Value.
          </span>
        </h1>

        {/* double-dash divider */}
        <div
          className="animate-fade-up mt-7 flex items-center justify-center gap-2"
          style={{ animationDelay: "0.2s" }}
          aria-hidden="true"
        >
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
        </div>

        <p
          className="animate-fade-up mx-auto mt-7 max-w-prose leading-relaxed text-white/80 drop-shadow"
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
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
          >
            OUR SERVICES
            <ArrowRight />
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/40 px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
          >
            ABOUT US
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
