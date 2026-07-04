import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import SectionFade from "@/components/SectionFade";

/**
 * Interior page banner — a compact navy hero used at the top of every
 * page except Home. Each route passes its own distinct 4K background image
 * (`bgImage`) so pages feel unique while sharing the landing page's
 * cinematic navy-infrastructure vibe. A navy gradient overlay keeps the
 * headline legible over any image.
 */
export default function PageHeader({ eyebrow, title, subtitle, bgImage }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* distinct 4K background image, per page */}
      {bgImage && (
        <Image
          src={bgImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
      )}

      {/* navy gradient overlay for headline legibility */}
      {bgImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90"
        />
      )}

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

      {/* soft blend into the light section below */}
      <SectionFade edge="bottom" />

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
