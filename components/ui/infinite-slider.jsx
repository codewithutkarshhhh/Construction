"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* Dependency-free infinite marquee. Children are rendered twice and the track
   is translated by -50% on a linear CSS loop, so the second copy lands exactly
   where the first began — a seamless scroll. `speed`/`speedOnHover` are in
   pixels-per-second; we measure the track to convert them into a duration. */
export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  speedOnHover,
  reverse = false,
  className,
  ...props
}) {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState({ base: 0, hover: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const half = el.scrollWidth / 2;
      if (!half) return;
      setDuration({
        base: half / speed,
        hover: half / (speedOnHover || speed),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [speed, speedOnHover, children]);

  const items = Array.isArray(children) ? children : [children];

  const renderSet = (keyPrefix, hidden) =>
    items.map((child, i) => (
      <div
        key={`${keyPrefix}-${i}`}
        className="shrink-0"
        style={{ marginInlineEnd: `${gap}px` }}
        aria-hidden={hidden || undefined}
      >
        {child}
      </div>
    ));

  return (
    <div className={cn("infinite-slider group", className)} {...props}>
      <div
        ref={trackRef}
        className={cn(
          "infinite-slider-track flex w-max",
          reverse && "[animation-direction:reverse]"
        )}
        style={{
          "--slider-duration": duration.base ? `${duration.base}s` : "40s",
          "--slider-duration-hover": duration.hover
            ? `${duration.hover}s`
            : "40s",
        }}
      >
        {renderSet("a", false)}
        {renderSet("b", true)}
      </div>
    </div>
  );
}
