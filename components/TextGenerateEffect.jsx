"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style "text generate" heading — each word fades and
 * de-blurs in sequence. Adapted for this JS project: the words inherit
 * their color from the parent (via `currentColor`), so the same effect
 * works on both light and dark (navy) backgrounds. Render as any element
 * with the `as` prop (defaults to a span) so it can stay a semantic <h1>.
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
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
