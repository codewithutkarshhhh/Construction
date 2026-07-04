import Link from "next/link";
import {
  BlueprintIcon,
  PeopleIcon,
  CoinsIcon,
  ChartIcon,
} from "./ServiceIcons";
import { ArrowRight, Eyebrow } from "./ui";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const PILLARS = [
  {
    title: "Project Advisory",
    items: ["Techno-Financial Planning", "Design Engineering", "Project Management"],
    Icon: BlueprintIcon,
  },
  {
    title: "Corporate Advisory",
    items: ["Financial Structuring", "Transaction Advisory"],
    Icon: PeopleIcon,
  },
  {
    title: "Funds Management",
    items: ["Fund Raising", "Fund Administration"],
    Icon: CoinsIcon,
  },
  {
    title: "Portfolio Management",
    items: ["Value Engineering", "Portfolio Administration"],
    Icon: ChartIcon,
  },
];

export default function ServiceCards() {
  return (
    <section id="services" aria-label="Our core services" className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="text-center">
          <Eyebrow className="justify-center">What We Do</Eyebrow>
          <TextGenerateEffect
            as="h2"
            inView
            words="Four Pillars of Capability"
            className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ title, items, Icon }) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-xl bg-white p-7 shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="h-14 w-14 text-brand" />

              <h3 className="mt-6 text-base font-bold uppercase tracking-wide text-navy">
                {title}
              </h3>
              <span className="underline-accent mt-2" />

              <ul className="mt-4 flex-1 space-y-2 text-sm text-bodygrey">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-brand transition-colors hover:text-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Read More
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
