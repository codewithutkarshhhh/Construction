import { CheckIcon, Eyebrow } from "./ui";

const REASONS = [
  {
    title: "ISO 9001:2012 Certified",
    body: "Quality-driven processes across every project.",
  },
  {
    title: "End-to-End Capability",
    body: "From advisory and planning to on-ground machinery execution.",
  },
  {
    title: "Trusted by Industry Leaders",
    body: "Delivering for telecom, energy, and infrastructure majors.",
  },
  {
    title: "Own Fleet of Heavy Machinery",
    body: "JCBs, HDD rigs, and specialized equipment available on-demand and on contract.",
  },
  {
    title: "Pan-India Execution Reach",
    body: "Capable of mobilizing resources across multiple states.",
  },
];

export default function WhyChoose() {
  return (
    <section aria-label="Why choose PKS Infratech" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="text-center">
          <Eyebrow className="justify-center">Why PKS Infratech</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
            Built to Deliver, End to End
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-xl border border-slate-100 bg-surface p-6 shadow-sm"
            >
              <CheckIcon className="mt-0.5 shrink-0 text-brand" />
              <div>
                <h3 className="text-base font-bold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-bodygrey">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
