"use client";

import { Fragment, useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style "text generate" effect — each word fades and de-blurs
 * into place in sequence.
 *
 * Adapted for this JS project (types stripped from the original .tsx) with
 * three extensions over the canonical component so it can be reused across the
 * site's headings and lead paragraphs:
 *   - `as` prop: render as any element (defaults to a <span>) so it can be a
 *     semantic <h1>/<h2>/<p> without an extra wrapper.
 *   - color inheritance: words use `currentColor` instead of a hardcoded
 *     black/white, so the same effect works on light and navy backgrounds.
 *   - `inView` prop: when true the animation waits until the element scrolls
 *     into view instead of firing on mount — needed for below-the-fold
 *     content, which would otherwise finish animating before it's seen.
 *
 * Props:
 *   words     {string}  The text to animate (space-separated; required).
 *   className {string}  Extra classes for the wrapping element.
 *   filter    {boolean} Apply the blur-in filter (default true).
 *   duration  {number}  Per-word animation duration in seconds (default 0.5).
 *   as        {Element} Element/tag to render as (default "span").
 *   inView    {boolean} Trigger on scroll into view rather than on mount.
 */
export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  as: Tag = "span",
  inView = false,
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-80px" });
  const shouldAnimate = inView ? isInView : true;
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!shouldAnimate) return;
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
  }, [scope.current, shouldAnimate]);

  return (
    <Tag ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <Fragment key={word + idx}>
          <motion.span
            className="inline-block text-current opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}
          </motion.span>
          {/* Space lives BETWEEN the inline-block word spans (as its own text
              node) so it isn't collapsed as trailing whitespace inside a box. */}
          {idx < wordsArray.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
