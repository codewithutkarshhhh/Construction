import { Eyebrow } from "./ui";

/* The roster is intentionally text-based wordmark chips — clean, crisp at any
   size, and dependency-free until real logo assets are supplied. */
export const CLIENTS = [
  "NIPL",
  "BSNL",
  "BBNL",
  "Airtel",
  "Jio",
  "HFCL",
  "NCC",
  "GAIL",
  "STL Tech",
  "Vmart",
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
          {CLIENTS.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center rounded-xl border border-slate-100 bg-surface px-4 py-6 text-lg font-bold uppercase tracking-wide text-navy shadow-sm transition-colors hover:border-brand/40 hover:text-brand"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
