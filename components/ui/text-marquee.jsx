"use client";

import { useRef, useEffect, forwardRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TextMarquee — endlessly scrolling headline text.
 *
 * Adapted for this JS project (types stripped from the original .tsx).
 * Further changes from the source component:
 *   - `clasname` (typo in the original) is exposed as `className`.
 *   - `wrap` is inlined below instead of pulling in `@motionone/utils`.
 *   - Hooks import from `framer-motion` to match the rest of components/ui.
 *   - Respects `prefers-reduced-motion` (renders as static text).
 *   - The three duplicate copies are `aria-hidden`, like infinite-slider.jsx.
 *
 * Props:
 *   children        {string}  The text to scroll (required, plain string).
 *   baseVelocity    {number}  Drift speed; negative scrolls left (default -5).
 *   className       {string}  Extra Tailwind classes for each text span.
 *   scrollDependent {boolean} If true, page scroll speeds up / flips the drift.
 *   delay           {number}  Delay before the animation starts, in ms.
 */

/* Inlined from @motionone/utils — wraps v into the [min, max) range. */
const wrap = (min, max, v) => {
  const range = max - min;
  return min + ((((v - min) % range) + range) % range);
};

const TextMarquee = forwardRef(function TextMarquee(
  { children, baseVelocity = -5, className, scrollDependent = false, delay = 0 },
  ref
) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const hasStarted = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (reduceMotion || !hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={ref}
      className="flex flex-nowrap overflow-hidden whitespace-nowrap"
    >
      <motion.div
        className="flex flex-nowrap gap-10 whitespace-nowrap"
        style={{ x }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            aria-hidden={i > 0 || undefined}
            className={cn("block text-[8vw]", className)}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
});

TextMarquee.displayName = "TextMarquee";

export default TextMarquee;
