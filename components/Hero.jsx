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
      {/* 4K animated background — flowing city-traffic light trails (autoplay, muted, looping) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

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
        <h1 className="font-display text-5xl font-bold uppercase leading-[0.98] tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl">
          <span className="block text-white">Building Infrastructure.</span>
          <span className="mt-1 block text-sky-300">Creating Enduring Value.</span>
        </h1>

        {/* double-dash divider */}
        <div className="mt-7 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
        </div>

        <p className="mx-auto mt-7 max-w-prose text-base leading-relaxed text-white/80 drop-shadow sm:text-lg">
          PKS Infratech is an infrastructure development and advisory firm
          committed to delivering sustainable growth through expert guidance,
          strategic partnerships, and disciplined execution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
