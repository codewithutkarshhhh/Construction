"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style "text generate" effect — each word fades and de-blurs
 * into place in sequence.
 *
 * Adapted for this JS project (types stripped from the original .tsx) with
 * two extensions over the canonical component so it can be reused across the
 * site's headings:
 *   - `as` prop: render as any element (defaults to a <span>) so it can be a
 *     semantic <h1> without an extra wrapper.
 *   - color inheritance: words use `currentColor` instead of a hardcoded
 *     black/white, so the same effect works on light and navy backgrounds.
 *
 * Props:
 *   words     {string}  The text to animate (space-separated; required).
 *   className {string}  Extra classes for the wrapping element.
 *   filter    {boolean} Apply the blur-in filter (default true).
 *   duration  {number}  Per-word animation duration in seconds (default 0.5).
 *   as        {Element} Element/tag to render as (default "span").
 */
export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  as: Tag = "span",
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.12),
      }
    );
  }, [scope.current]);

  return (
    <Tag ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block text-current opacity-0"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
