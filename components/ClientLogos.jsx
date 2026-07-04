import { Eyebrow } from "./ui";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

/* Client logos live as self-contained SVGs in /public/logos — served from the
   site's own origin, so there are no external hotlinks to break. Airtel and Jio
   use their official brand marks; the remaining files are drop-in replaceable
   with official artwork of the same name, no code change required.
   `name` doubles as the accessible label. */
export const CLIENTS = [
  { name: "NIPL", logo: "/logos/nipl.svg" },
  { name: "BSNL", logo: "/logos/bsnl.svg" },
  { name: "BBNL", logo: "/logos/bbnl.svg" },
  { name: "Airtel", logo: "/logos/airtel.svg" },
  { name: "Jio", logo: "/logos/jio.svg" },
  { name: "HFCL", logo: "/logos/hfcl.svg" },
  { name: "NCC", logo: "/logos/ncc.svg" },
  { name: "GAIL", logo: "/logos/gail.svg" },
  { name: "STL Tech", logo: "/logos/stl.svg" },
  { name: "Vmart", logo: "/logos/vmart.svg" },
];

export default function ClientLogos({
  heading = "Our Clients",
  intro = "Trusted by industry leaders across telecom, energy, and infrastructure.",
  bg = "bg-white",
}) {
  return (
    <section aria-label="Our clients" className={bg}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="text-center">
          <Eyebrow className="justify-center">{heading}</Eyebrow>
          <p className="mx-auto mt-4 max-w-2xl text-bodygrey">{intro}</p>
        </div>

        <InfiniteSlider
          gap={56}
          speed={40}
          speedOnHover={12}
          className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          {CLIENTS.map(({ name, logo }) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center"
              title={name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`${name} logo`}
                loading="lazy"
                className="h-8 w-auto max-w-[160px] object-contain transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Static, screen-reader-friendly roster (the marquee is decorative motion). */}
        <ul className="sr-only">
          {CLIENTS.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
