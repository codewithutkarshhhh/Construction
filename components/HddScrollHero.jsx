"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/ui";

/**
 * HddScrollHero — a cinematic, scroll-driven 3D hero for the Services page.
 *
 * A 241-frame render of a Horizontal Directional Drilling (HDD) machine is
 * played back frame-by-frame as the user scrolls through a tall, pinned
 * section: the machine starts as a wireframe blueprint, explodes into its
 * individual components floating in space, then reassembles into the finished,
 * fully-rendered rig. Frames are drawn to a <canvas> (cover-fit) so playback is
 * buttery smooth. Glassmorphism panels cross-fade in over the top with soft
 * parallax, a pulsing core glow sits behind the machine, and a slim scroll
 * progress rail tracks the journey — an Apple / Tesla style product reveal.
 */

const FRAME_COUNT = 241;
const framePath = (i) =>
  `/hdd/frame-${String(i + 1).padStart(3, "0")}.jpg`;

/** Narrative captions, each mapped to a slice of scroll progress [0..1]. */
const STAGES = [
  {
    at: 0.06,
    eyebrow: "Horizontal Directional Drilling",
    title: "Engineered to go under.",
    body: "Trenchless underground drilling for fiber, power and pipeline — mapped, modelled and mobilised as a complete system.",
  },
  {
    at: 0.4,
    eyebrow: "Exploded View",
    title: "Every part, accounted for.",
    body: "Rig, power pack, drill string, mud system and control cabin — each component maintained to spec and deployment-ready.",
  },
  {
    at: 0.74,
    eyebrow: "Field Ready",
    title: "Assembled for the ground you're breaking.",
    body: "The full HDD fleet, operator-ready and available on a contract basis for large-scale infrastructure rollouts across India.",
  },
];

/** Live capacity figures shown in the glass stat rail. */
const STATS = [
  { value: "241", label: "Component render" },
  { value: "Pan-India", label: "Mobilisation" },
  { value: "24/7", label: "Operator support" },
];

export default function HddScrollHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const rafRef = useRef(0);
  const currentFrameRef = useRef(-1);

  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  // Respect users who prefer reduced motion — they get a static reveal.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  // Preload every frame, tracking progress for the loader.
  useEffect(() => {
    let alive = true;
    let count = 0;
    const imgs = new Array(FRAME_COUNT);
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i);
      const done = () => {
        if (!alive) return;
        count += 1;
        setLoaded(count);
        if (count === FRAME_COUNT) setReady(true);
      };
      img.onload = done;
      img.onerror = done;
      imgs[i] = img;
    }
    imagesRef.current = imgs;
    return () => {
      alive = false;
    };
  }, []);

  // Draw a single frame, cover-fitting the image to the canvas.
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cw, ch);
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    currentFrameRef.current = index;
  };

  // Scroll → frame mapping, throttled through requestAnimationFrame.
  useEffect(() => {
    if (!ready) return;

    const update = () => {
      rafRef.current = 0;
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      setProgress(p);
      const frame = Math.min(
        FRAME_COUNT - 1,
        Math.round(p * (FRAME_COUNT - 1))
      );
      if (frame !== currentFrameRef.current) drawFrame(frame);
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };
    const onResize = () => {
      currentFrameRef.current = -1; // force redraw at new size
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  // Draw the opening frame the moment loading finishes.
  useEffect(() => {
    if (ready) drawFrame(0);
  }, [ready]);

  const loadPct = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section
      ref={sectionRef}
      className="hdd-hero relative bg-navy"
      style={{ height: reduced ? "100vh" : "360vh" }}
      aria-label="Horizontal Directional Drilling machine — interactive scroll reveal"
    >
      {/* Pinned viewport-height stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Deep cinematic base wash matching the render's own lighting */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 38%, #16233f 0%, #0d1729 45%, #070b16 100%)",
          }}
        />

        {/* Pulsing core glow behind the machine */}
        <div
          aria-hidden="true"
          className="hdd-glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,150,255,0.28) 0%, rgba(30,74,156,0.12) 40%, transparent 70%)",
          }}
        />

        {/* The frame canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        {/* Faint vignette + grid to seat the machine in space */}
        <div
          aria-hidden="true"
          className="hero-pattern pointer-events-none absolute inset-0 opacity-[0.14]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(130% 120% at 50% 50%, transparent 55%, rgba(4,7,14,0.85) 100%)",
          }}
        />

        {/* Loader */}
        {!ready && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Rendering rig
            </span>
            <div className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-brand transition-[width] duration-200"
                style={{ width: `${loadPct}%` }}
              />
            </div>
            <span className="font-display text-2xl font-bold tabular-nums text-white/90">
              {loadPct}%
            </span>
          </div>
        )}

        {/* Narrative glass panels, cross-fading with scroll */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="mx-auto flex h-full max-w-7xl items-end px-5 pb-16 sm:items-center sm:px-8 sm:pb-0">
            <div className="relative w-full sm:max-w-xl">
              {STAGES.map((stage, i) => {
                const active = stageOpacity(progress, i, reduced);
                return (
                  <div
                    key={stage.eyebrow}
                    className="sm:absolute sm:inset-x-0 sm:top-1/2 sm:-translate-y-1/2"
                    style={{
                      opacity: active.opacity,
                      transform: `translateY(${active.y}px)`,
                      transition:
                        "opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                      pointerEvents: active.opacity > 0.6 ? "auto" : "none",
                    }}
                  >
                    <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-9">
                      <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
                        <span
                          className="h-[2px] w-8 rounded-full bg-sky-300"
                          aria-hidden="true"
                        />
                        {stage.eyebrow}
                      </span>
                      <h2 className="mt-4 text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white drop-shadow sm:text-[2.6rem]">
                        {stage.title}
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                        {stage.body}
                      </p>

                      {/* CTA appears with the final, assembled stage */}
                      {i === STAGES.length - 1 && (
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href="/services/heavy-machinery"
                            className="inline-flex items-center justify-center gap-3 rounded-md bg-brand px-6 py-3 text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                          >
                            EXPLORE HDD FLEET
                            <ArrowRight />
                          </Link>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-md border border-white/35 px-6 py-3 text-sm font-semibold tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                          >
                            MACHINERY INQUIRY
                            <ArrowRight />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Glass stat rail — fixed within the stage, top-right */}
        <div className="pointer-events-none absolute right-5 top-24 z-10 hidden lg:block">
          <div className="flex flex-col gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-xl"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll progress rail + cue */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="h-24 w-[3px] overflow-hidden rounded-full bg-white/12">
            <div
              className="w-full rounded-full bg-gradient-to-b from-sky-400 to-brand"
              style={{ height: `${Math.max(progress * 100, 4)}%` }}
            />
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50"
            style={{
              opacity: progress > 0.9 ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          >
            Scroll
          </span>
        </div>

        {/* Soft blend into the light services content below */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--blend-color))",
          }}
        />
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

/**
 * Opacity + parallax offset for stage `i` given overall scroll `progress`.
 * Each stage owns an equal slice; it fades up as its slice arrives and fades
 * out as the next begins. Reduced-motion users see the first stage, static.
 */
function stageOpacity(progress, i, reduced) {
  if (reduced) return { opacity: i === 0 ? 1 : 0, y: 0 };
  const slice = 1 / STAGES.length;
  const center = i * slice + slice / 2;
  const dist = Math.abs(progress - center);
  const half = slice * 0.62;
  const opacity = clamp(1 - dist / half, 0, 1);
  const y = (progress - center) * -60; // gentle parallax
  return { opacity, y };
}
