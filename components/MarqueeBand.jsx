import TextMarquee from "@/components/ui/text-marquee";
import { cn } from "@/lib/utils";

const TONES = {
  light: { section: "bg-surface", text: "text-navy/10" },
  white: { section: "bg-white", text: "text-navy/10" },
  navy: { section: "bg-navy", text: "text-white/10" },
};

/**
 * Decorative full-bleed scrolling headline band, styled to the site's display
 * typography as ghost/watermark text. Used as a section divider on most pages.
 *
 * Props:
 *   rows            {string[]} 1–2 lines of copy; the second row automatically
 *                              scrolls the opposite direction. End each string
 *                              with a trailing " • " so the copies chain.
 *   tone            {string}   "light" | "white" | "navy" background + text.
 *   baseVelocity    {number}   Drift speed for the first row (default 3).
 *   scrollDependent {boolean}  Page scroll accelerates/flips the drift.
 *   className       {string}   Extra classes for the <section>.
 *   textClassName   {string}   Extra classes for the text (e.g. stronger tint).
 */
export default function MarqueeBand({
  rows,
  tone = "light",
  baseVelocity = 3,
  scrollDependent = true,
  className,
  textClassName,
}) {
  const t = TONES[tone] || TONES.light;

  return (
    <section
      aria-hidden="true"
      className={cn("overflow-hidden py-10 sm:py-14", t.section, className)}
    >
      {rows.map((text, i) => (
        <TextMarquee
          key={text}
          delay={500}
          baseVelocity={i % 2 ? -baseVelocity : baseVelocity}
          scrollDependent={scrollDependent}
          className={cn(
            "font-display text-[9vw] font-bold uppercase leading-[90%] tracking-tight sm:text-[7vw]",
            t.text,
            textClassName
          )}
        >
          {text}
        </TextMarquee>
      ))}
    </section>
  );
}
