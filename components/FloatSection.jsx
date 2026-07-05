"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * FloatSection — makes a home-page section float above the cinematic 4K stage.
 *
 * Two motions compose:
 *   1. Entrance — the section rises, sharpens and fades in the first time it
 *      scrolls into view (Apple-style product reveal).
 *   2. Parallax — while on screen it keeps drifting slightly slower than the
 *      page (translateY proportional to its distance from viewport centre),
 *      so panels feel suspended in space over the assembling building.
 *
 * Variants control the panel chrome:
 *   glass — frosted white glassmorphism card (default content bands)
 *   navy  — frosted deep-navy glass (CTA band)
 *   media — rounded, clipped, heavy-shadow frame with no fill (image bands)
 *   bare  — no chrome; content floats directly over the backdrop (marquee)
 *
 * Reduced-motion users get static, fully-visible sections.
 */
export default function FloatSection({
  children,
  depth = 44,
  variant = "bare",
  className,
}) {
  const ref = useRef(null);
  const innerRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    let raf = 0;
    const update = () => {
      raf = 0;
      const inner = innerRef.current;
      if (!inner) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the section has just left the top, +1 as it enters from the
      // bottom, 0 at viewport centre.
      const ratio = Math.max(
        -1,
        Math.min(1, ((r.top + r.height / 2 - vh / 2) / (vh + r.height)) * 2)
      );
      inner.style.transform = `translate3d(0, ${(ratio * depth).toFixed(
        1
      )}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [depth]);

  return (
    <div ref={ref} className="float-section">
      <div
        ref={innerRef}
        className="will-change-transform"
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div
          className={cn(
            "transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            variant === "glass" && "glass-panel",
            variant === "navy" && "glass-panel-navy",
            variant === "media" && "glass-media",
            shown
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-14 opacity-0 blur-[6px]",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
