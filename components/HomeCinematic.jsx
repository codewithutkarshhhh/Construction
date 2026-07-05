"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HomeCinematic — the scroll-driven 4K stage behind the entire home page.
 *
 * A 208-frame ultra-high-resolution (3840×2160) render of a tower — blueprint
 * skeleton → exploded structural parts floating in space → the finished,
 * fully-glazed building — is pinned as a fixed, full-viewport canvas behind
 * every section of the page. Overall page scroll (top of the hero to the last
 * band) is mapped 1:1 onto the frame timeline, so the building assembles
 * itself as the visitor travels down the page while the content floats above
 * it on glass panels.
 *
 * Frames preload in two passes so the scene is interactive quickly: a coarse
 * pass (every 6th frame) makes scrubbing live almost immediately, then the
 * remaining frames stream in and the playback resolves to full smoothness.
 * The canvas always draws the nearest loaded frame, cover-fit with high-
 * quality resampling at up to 2× device pixel ratio.
 */

const FRAME_COUNT = 208;
const COARSE_STEP = 6;
const framePath = (i) =>
  `/building/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export default function HomeCinematic({ children }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedRef = useRef([]);
  const drawnFrameRef = useRef(-1);
  const desiredFrameRef = useRef(0);
  const rafRef = useRef(0);
  const reducedRef = useRef(false);

  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Draw the closest loaded frame to the one scroll is asking for.
  const drawNearest = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const target = desiredFrameRef.current;
    const loaded = loadedRef.current;

    let index = -1;
    if (loaded[target]) {
      index = target;
    } else {
      for (let d = 1; d < FRAME_COUNT; d++) {
        if (loaded[target - d]) {
          index = target - d;
          break;
        }
        if (loaded[target + d]) {
          index = target + d;
          break;
        }
      }
    }
    if (index < 0 || index === drawnFrameRef.current) return;

    const img = imagesRef.current[index];
    if (!img || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    // Render at up to 3× device pixels so the 4K source stays pin-sharp on
    // retina displays instead of being resampled through a 1–2× buffer.
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Resizing resets context state — re-enable the best resampler every draw
    // so the 4K frames stay crisp when cover-fit to the viewport.
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    drawnFrameRef.current = index;
  };

  const scheduleDraw = () => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        drawNearest();
      });
    }
  };

  // Two-pass preload: coarse timeline first, then fill in every frame.
  useEffect(() => {
    let alive = true;
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const imgs = new Array(FRAME_COUNT);
    const loaded = new Array(FRAME_COUNT).fill(false);
    imagesRef.current = imgs;
    loadedRef.current = loaded;
    let count = 0;

    const load = (i) => {
      if (imgs[i]) return;
      const img = new Image();
      img.decoding = "async";
      img.src = framePath(i);
      img.onload = () => {
        if (!alive) return;
        loaded[i] = true;
        count += 1;
        setLoadedCount(count);
        if (i === 0) setFirstFrameReady(true);
        // Refine the on-screen frame as better matches arrive.
        scheduleDraw();
      };
      img.onerror = () => {
        if (!alive) return;
        count += 1;
        setLoadedCount(count);
      };
      imgs[i] = img;
    };

    // Pass 1 — frame 0, the last frame, then every 6th in between.
    load(0);
    load(FRAME_COUNT - 1);
    for (let i = COARSE_STEP; i < FRAME_COUNT - 1; i += COARSE_STEP) load(i);
    // Pass 2 — everything else, deferred a beat so the coarse pass wins the
    // network first.
    const fill = setTimeout(() => {
      if (!alive) return;
      for (let i = 1; i < FRAME_COUNT - 1; i++) load(i);
    }, 900);

    return () => {
      alive = false;
      clearTimeout(fill);
    };
  }, []);

  // Page scroll → frame index across the full height of the home content.
  useEffect(() => {
    const update = () => {
      const el = wrapRef.current;
      if (!el) return;
      if (reducedRef.current) {
        desiredFrameRef.current = 0;
        scheduleDraw();
        return;
      }
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;
      desiredFrameRef.current = Math.min(
        FRAME_COUNT - 1,
        Math.round(p * (FRAME_COUNT - 1))
      );
      scheduleDraw();
    };

    const onScroll = () => update();
    const onResize = () => {
      drawnFrameRef.current = -1; // force redraw at the new canvas size
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
  }, []);

  const loadPct = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div ref={wrapRef} className="home-cinematic relative">
      {/* Fixed 4K stage pinned behind every home section */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        {/* Light cinematic base matching the render's own studio backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, #f4f8ff 0%, #e8eefb 55%, #dfe7f6 100%)",
          }}
        />

        {/* The scroll-scrubbed frame canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: firstFrameReady ? 1 : 0,
            transition: "opacity 1s ease",
            // GPU-cheap micro-contrast pop keeps the render looking crisp
            // after cover-fit resampling.
            filter: "contrast(1.06) saturate(1.08)",
          }}
        />

        {/* Soft brand glow orbs drifting behind the glass panels — kept very
            faint so they never haze the render itself. */}
        <div
          className="home-glow absolute left-[12%] top-[18%] h-[46vmin] w-[46vmin] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,150,255,0.08) 0%, rgba(30,74,156,0.03) 45%, transparent 70%)",
          }}
        />
        <div
          className="home-glow absolute bottom-[10%] right-[8%] h-[52vmin] w-[52vmin] rounded-full"
          style={{
            animationDelay: "-3s",
            background:
              "radial-gradient(circle, rgba(30,74,156,0.06) 0%, rgba(56,150,255,0.02) 45%, transparent 70%)",
          }}
        />

        {/* Header legibility strip only — the rest of the frame stays fully
            clear so the 4K render reads at native sharpness. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.04) 9%, transparent 16%)",
          }}
        />
      </div>

      {/* Loading pill — shows while the 4K sequence streams in */}
      {loadPct < 100 && (
        <div className="pointer-events-none fixed bottom-5 right-5 z-30 hidden sm:block">
          <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/60 px-4 py-2 shadow-[0_12px_40px_-12px_rgba(15,27,51,0.35)] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-navy/70 tabular-nums">
              4K scene · {loadPct}%
            </span>
          </div>
        </div>
      )}

      <div className="relative">{children}</div>
    </div>
  );
}
