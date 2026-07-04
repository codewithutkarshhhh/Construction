import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

/**
 * Interior page banner — a compact navy hero used at the top of every
 * page except Home. Keeps the site's dark/geometric language without the
 * full-bleed 4K image treatment reserved for the landing page.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* faint decorative geometric pattern */}
      <div
        aria-hidden="true"
        className="hero-pattern pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute right-8 top-10 hidden h-20 w-28 opacity-40 sm:block"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute left-8 bottom-8 hidden h-20 w-28 opacity-40 sm:block"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
        {eyebrow && (
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            {eyebrow}
          </p>
        )}
        <TextGenerateEffect
          as="h1"
          words={title}
          className="mt-4 block text-4xl font-bold uppercase tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl"
        />

        <div
          className="animate-fade-up mt-6 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
          <span className="h-[3px] w-5 rounded-full bg-sky-300" />
        </div>

        {subtitle && (
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
