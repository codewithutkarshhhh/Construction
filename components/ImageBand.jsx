import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

/* Aerial highway-interchange / cable-stayed bridge — Unsplash, infrastructure theme. */
const BANNER_URL =
  "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=2400&q=80";

export default function ImageBand() {
  return (
    <section aria-label="Enabling progress, empowering communities" className="relative">
      <div className="relative h-[320px] w-full bg-navy sm:h-[400px] lg:h-[460px]">
        <Image
          src={BANNER_URL}
          alt="Aerial view of a modern highway interchange with a cable-stayed bridge crossing water, greenery, and a city skyline in the hazy background."
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />

        {/* dark gradient overlay, bottom-left for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-navy/85 via-navy/40 to-transparent"
        />

        {/* dotted-grid decorative element, bottom-left */}
        <div
          aria-hidden="true"
          className="dot-grid-light absolute bottom-8 left-6 h-16 w-24 opacity-70 sm:left-10 sm:h-20 sm:w-28"
        />

        {/* overlaid text */}
        <div className="absolute bottom-8 left-6 max-w-lg sm:bottom-12 sm:left-14">
          <span className="mb-4 block h-[3px] w-12 rounded-full bg-brand" aria-hidden="true" />
          <h2 className="leading-tight text-white drop-shadow">
            <TextGenerateEffect
              as="span"
              inView
              words="Enabling progress."
              className="block"
            />
            <TextGenerateEffect
              as="span"
              inView
              words="Empowering communities."
              className="block"
            />
          </h2>
        </div>
      </div>
    </section>
  );
}
