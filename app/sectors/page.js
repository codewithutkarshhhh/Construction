import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Eyebrow } from "@/components/ui";

export const metadata = {
  title: "Sectors",
  description:
    "PKS Infratech serves telecom & fiber, energy & gas pipeline, broadband & digital, public sector & utility, and retail & commercial infrastructure clients.",
};

function SectorIcon({ path, className = "" }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      {path}
    </svg>
  );
}

const SECTORS = [
  {
    title: "Telecom & Fiber Infrastructure",
    body: "Supporting fiber-optic network rollout for telecom operators and infrastructure companies through HDD-based cable laying, trenching, and civil works.",
    icon: (
      <>
        <path d="M24 8v32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14 14c6-6 14-6 20 0M17 20c4-4 10-4 14 0M20 26c2.5-2.5 5.5-2.5 8 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="24" cy="34" r="3" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Energy & Gas Pipeline Infrastructure",
    body: "Providing execution support for pipeline laying and associated civil infrastructure for energy sector clients.",
    icon: (
      <>
        <path d="M8 30h10l4-8 6 16 4-8h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="12" width="36" height="6" rx="2" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 18v4M24 18v4M34 18v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Broadband & Digital Infrastructure",
    body: "Enabling last-mile and backbone connectivity infrastructure rollout in partnership with broadband network providers.",
    icon: (
      <>
        <rect x="10" y="26" width="28" height="14" rx="2" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17 33h.01M23 33h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 20c4-4 12-4 16 0M12 15c7-7 17-7 24 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Public Sector & Utility Infrastructure",
    body: "Delivering advisory and execution support for public infrastructure and utility projects.",
    icon: (
      <>
        <path d="M24 8l14 8v4H10v-4l14-8z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 24v10M24 24v10M34 24v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 38h32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Retail & Commercial Infrastructure",
    body: "Extending project advisory and execution capability to retail and commercial infrastructure development.",
    icon: (
      <>
        <path d="M10 18l2-8h24l2 8" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M10 18a4 4 0 008 0 4 4 0 008 0 4 4 0 008 0 4 4 0 008 0" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12 22v16h24V22" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M22 38v-8h6v8" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Where We Work"
        subtitle="PKS Infratech serves clients across telecom, energy, digital, public, and commercial infrastructure."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="text-center">
            <Eyebrow className="justify-center">Key Sectors</Eyebrow>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map(({ title, body, icon }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-surface p-8 shadow-card transition-transform hover:-translate-y-1"
              >
                <SectorIcon path={icon} className="h-12 w-12 text-brand" />
                <h2 className="mt-6 text-lg font-bold text-navy">{title}</h2>
                <span className="underline-accent mt-2" />
                <p className="mt-4 text-sm leading-relaxed text-bodygrey">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
