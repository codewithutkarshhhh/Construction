import { Eyebrow } from "./ui";

/* Each client is rendered from a self-contained, brand-accurate SVG wordmark in
   /public/logos — crisp at any size and dependency-free (no external hotlinks).
   `name` doubles as the accessible label and the text fallback. */
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

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map(({ name, logo }) => (
            <li
              key={name}
              className="flex items-center justify-center rounded-xl border border-slate-100 bg-surface px-4 py-6 shadow-sm transition-colors hover:border-brand/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`${name} logo`}
                loading="lazy"
                className="h-8 w-auto max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
