/**
 * Soft edge fade that blends a full-width navy band into the adjacent light
 * background, removing the hard color seam between sections.
 *
 * Drop it inside a `relative overflow-hidden` navy section, before that
 * section's content, once per edge that meets a light section. The fade
 * dissolves the navy toward `var(--blend-color)` — a per-page tone defined in
 * globals.css — so the transition is seamless on every route.
 *
 * @param {"top"|"bottom"} edge  which edge fades into the neighbouring section
 */
export default function SectionFade({ edge = "bottom", className = "" }) {
  const isTop = edge === "top";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        isTop ? "top-0" : "bottom-0"
      } h-24 sm:h-32 ${className}`}
      style={{
        background: `linear-gradient(to ${
          isTop ? "top" : "bottom"
        }, transparent, var(--blend-color))`,
      }}
    />
  );
}
