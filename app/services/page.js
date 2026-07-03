import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Eyebrow, CheckIcon, ArrowRight } from "@/components/ui";
import {
  BlueprintIcon,
  PeopleIcon,
  CoinsIcon,
  ChartIcon,
  ExcavatorIcon,
} from "@/components/ServiceIcons";

export const metadata = {
  title: "Services",
  description:
    "A complete suite of services spanning strategic advisory, financial structuring, and on-ground infrastructure execution — including heavy machinery deployment on a contract basis.",
};

const SERVICES = [
  {
    id: "project-advisory",
    title: "Project Advisory",
    Icon: BlueprintIcon,
    items: ["Techno-Financial Planning", "Design Engineering", "Project Management"],
    desc: "End-to-end guidance from project conception through execution, ensuring technical soundness and financial viability at every stage.",
  },
  {
    id: "corporate-advisory",
    title: "Corporate Advisory",
    Icon: PeopleIcon,
    items: ["Financial Structuring", "Transaction Advisory"],
    desc: "Strategic support for structuring infrastructure transactions, capital arrangements, and corporate financial decisions.",
  },
  {
    id: "funds-management",
    title: "Funds Management",
    Icon: CoinsIcon,
    items: ["Fund Raising", "Fund Administration"],
    desc: "Assistance in mobilizing project finance and managing fund administration through the project lifecycle.",
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    Icon: ChartIcon,
    items: ["Value Engineering", "Portfolio Administration"],
    desc: "Optimizing asset and project portfolios for maximum value delivery and efficient administration.",
  },
];

const EQUIPMENT = [
  {
    title: "JCB / Excavators",
    body: "For civil earthwork, trenching, and site preparation.",
  },
  {
    title: "HDD Machines (Horizontal Directional Drilling)",
    body: "For underground cable laying, fiber-optic network rollout, and pipeline installation without open trenching.",
  },
  {
    title: "Specialized Equipment",
    body: "Other specialized construction and infrastructure equipment, available on request.",
  },
];

const MACHINERY_REASONS = [
  "Well-maintained, operator-ready equipment",
  "Flexible short-term and long-term contract terms",
  "Experienced operators and technical support included",
  "Pan-India mobilization capability",
  "Ideal for telecom fiber rollout, gas/utility pipeline laying, road and civil infrastructure projects",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What We Offer"
        subtitle="A complete suite spanning strategic advisory, financial structuring, and on-ground infrastructure execution — including heavy machinery deployment on a contract basis."
      />

      {/* Advisory services */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map(({ id, title, Icon, items, desc }) => (
              <div
                key={id}
                id={id}
                className="scroll-mt-24 rounded-2xl border border-slate-100 bg-surface p-8 shadow-card"
              >
                <Icon className="h-14 w-14 text-brand" />
                <h2 className="mt-6 text-xl font-bold uppercase tracking-wide text-navy">
                  {title}
                </h2>
                <span className="underline-accent mt-2" />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-bodygrey">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Machinery */}
      <section id="machinery" className="scroll-mt-24 bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                <span className="h-[2px] w-8 rounded-full bg-sky-300" aria-hidden="true" />
                Contract Basis
              </span>
              <div className="mt-5 flex items-start gap-4">
                <ExcavatorIcon className="h-14 w-14 shrink-0 text-sky-300" />
                <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                  Heavy Machinery &amp; Equipment Services
                </h2>
              </div>
              <p className="mt-6 leading-relaxed text-white/80">
                PKS Infratech maintains and operates a dedicated fleet of heavy
                machinery for infrastructure execution — available for deployment
                on a <strong className="text-white">contract / rental basis</strong>{" "}
                to telecom, energy, and infrastructure companies undertaking
                large-scale rollouts.
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-white">
                Equipment available includes
              </h3>
              <div className="mt-4 space-y-4">
                {EQUIPMENT.map(({ title, body }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-white/70">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Why contract our machinery
              </h3>
              <ul className="mt-6 space-y-4">
                {MACHINERY_REASONS.map((reason) => (
                  <li key={reason} className="flex gap-3 text-white/85">
                    <CheckIcon className="mt-0.5 shrink-0 text-sky-300" />
                    <span className="text-sm leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-white/60">
                See our full fleet, contract model, and the sectors we serve —
                or reach out for machinery contract inquiries directly.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services/heavy-machinery"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-brand px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  EXPLORE MACHINERY SERVICES
                  <ArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  MACHINERY INQUIRY
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need advisory, funding, or machinery on contract?"
        body="Tell us about your project and we'll put the right capability behind it."
      />
    </>
  );
}
