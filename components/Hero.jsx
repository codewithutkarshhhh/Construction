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
    <section className="relative overflow-hidden bg-surface">
      {/* faint decorative geometric pattern, corners only */}
      <div
        aria-hidden="true"
        className="hero-pattern pointer-events-none absolute inset-0"
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
        <h1 className="font-display text-5xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="block text-navy">Building Infrastructure.</span>
          <span className="mt-1 block text-brand">Creating Enduring Value.</span>
        </h1>

        {/* double-dash divider */}
        <div className="mt-7 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-[3px] w-5 rounded-full bg-brand" />
          <span className="h-[3px] w-5 rounded-full bg-brand" />
        </div>

        <p className="mx-auto mt-7 max-w-prose text-base leading-relaxed text-bodygrey sm:text-lg">
          PKS Infratech is an infrastructure development and advisory firm
          committed to delivering sustainable growth through expert guidance,
          strategic partnerships, and disciplined execution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
          >
            OUR SERVICES
            <ArrowRight />
          </a>
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
          >
            ABOUT US
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
