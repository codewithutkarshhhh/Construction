import Image from "next/image";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import { Eyebrow, CheckIcon, ArrowRight } from "@/components/ui";
import { ExcavatorIcon } from "@/components/ServiceIcons";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const metadata = {
  title: "Heavy Machinery & Equipment Services",
  description:
    "PKS Infratech deploys a well-maintained fleet of heavy machinery — JCB excavators, HDD rigs, and more — with experienced operators, available on a flexible contract basis across India.",
};

/* Higgsfield-generated (Nano Banana Pro) infrastructure photography. */
const IMG = {
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_200631_0796d1ea-7635-4fbf-a54e-5ccb5526aa30.png",
  jcb: "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_200635_f9a38d02-c985-446e-acfc-efa49b83aae3.png",
  hdd: "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_200638_8cd62551-c33c-425d-9a8f-8362b0495e0f.png",
  fleet:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_200641_67c5f6e7-bdb2-404e-a2a1-a4227be7cec9.png",
};

const PHONE_PRIMARY = "+91 99199 11669";

const JCB = {
  usedFor: [
    "Civil earthwork and site preparation",
    "Open-trench excavation for cabling and pipelines",
    "Road-side and utility trenching",
    "Material handling and site clearance",
  ],
  why: [
    "Regularly serviced, well-maintained machines",
    "Trained and experienced operators included",
    "Flexible hourly, daily, and long-term contract terms",
    "Rapid mobilization across project sites",
  ],
};

const HDD = {
  usedFor: [
    "Trenchless underground cable laying (fiber-optic / telecom networks)",
    "Gas and water pipeline installation without surface disruption",
    "Crossing roads, railways, and water bodies without open-cut excavation",
    "Utility duct installation in congested urban areas",
  ],
  why: [
    "Minimal surface disruption — critical for urban and highway crossings",
    "Faster deployment than traditional open-trench methods",
    "Lower restoration costs and reduced project downtime",
    "Ideal for large-scale telecom fiber rollouts (NIPL, BSNL, BBNL, Airtel, Jio, HFCL projects)",
  ],
};

const ADDITIONAL = [
  "Trenchers and boring equipment",
  "Compactors and rollers",
  "Material transport and support vehicles",
  "Site support equipment for large-scale rollouts",
];

const STEPS = [
  {
    title: "Share Your Requirement",
    body: "Tell us the equipment type, project location, and duration.",
  },
  {
    title: "Get a Quote",
    body: "We assess scope and provide transparent contract terms.",
  },
  {
    title: "Mobilization",
    body: "Equipment and trained operators are deployed to your site.",
  },
  {
    title: "Execution & Support",
    body: "On-ground technical support throughout the contract period.",
  },
  {
    title: "Flexible Extension",
    body: "Extend or scale up based on project progress.",
  },
];

const CONTRACT_TERMS = [
  "Short-term (daily / weekly) contracts",
  "Long-term project-based contracts",
  "Multi-site / multi-district deployment for large rollouts",
];

const SECTORS = [
  {
    title: "Telecom & Fiber Infrastructure",
    body: "HDD-based cable laying for network operators.",
  },
  {
    title: "Energy & Gas Pipelines",
    body: "Trenchless pipeline installation.",
  },
  {
    title: "Broadband & Digital Infrastructure",
    body: "Last-mile and backbone connectivity works.",
  },
  {
    title: "Road & Civil Infrastructure",
    body: "Excavation, trenching, and site preparation.",
  },
  {
    title: "Public Utility Projects",
    body: "Water, sewage, and utility duct installation.",
  },
];

const REASONS = [
  "ISO 9001:2015 certified operational standards",
  "Well-maintained, inspection-ready fleet",
  "Experienced, trained machine operators",
  "Pan-India mobilization capability",
  "Transparent, flexible contract pricing",
  "Proven track record with telecom and energy majors — NIPL, BSNL, BBNL, Airtel, Jio, HFCL, NCC, GAIL, STL Tech",
];

/* Equipment block — image paired with "used for" and "why" lists.
   `reverse` flips the image to the right on large screens. */
function EquipmentBlock({ id, index, title, subtitle, image, alt, data, reverse }) {
  return (
    <div
      id={id}
      className={`scroll-mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-navy shadow-card">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
          {index}
        </span>
        <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-navy sm:text-3xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand">
            {subtitle}
          </p>
        )}
        <span className="underline-accent mt-4" />

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
              Used for
            </p>
            <ul className="mt-3 space-y-2.5">
              {data.usedFor.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-bodygrey">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
              Why contract from us
            </p>
            <ul className="mt-3 space-y-2.5">
              {data.why.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-bodygrey">
                  <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeavyMachineryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <Image
          src={IMG.hero}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/60"
        />
        <div
          aria-hidden="true"
          className="hero-pattern pointer-events-none absolute inset-0 opacity-50"
        />

        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
            <span className="h-[2px] w-8 rounded-full bg-sky-300" aria-hidden="true" />
            Heavy Machinery — Available on Contract
            <span className="h-[2px] w-8 rounded-full bg-sky-300" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-4xl font-bold uppercase tracking-tight drop-shadow sm:text-5xl lg:text-6xl">
            <TextGenerateEffect
              as="span"
              words="Powering Infrastructure"
              className="block text-white"
              duration={0.6}
            />
            <TextGenerateEffect
              as="span"
              words="On the Ground."
              className="mt-1 block text-sky-300"
              duration={0.6}
            />
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            From fiber-optic trenching to pipeline installation, PKS Infratech
            deploys a well-maintained fleet of heavy machinery — backed by
            experienced operators — to keep your infrastructure projects on
            schedule.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
            >
              REQUEST A QUOTE
              <ArrowRight />
            </Link>
            <a
              href={`tel:${PHONE_PRIMARY.replace(/\s+/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-3 rounded-md border border-white/40 px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto"
            >
              CALL US
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <Eyebrow className="justify-center">Contract-Basis Deployment</Eyebrow>
          <p className="mt-6 text-lg leading-relaxed text-bodygrey">
            Infrastructure projects run on execution capability, not just
            planning. That&apos;s why PKS Infratech maintains its own fleet of
            heavy machinery — available for deployment on a flexible contract
            basis to telecom operators, energy companies, EPC contractors, and
            government infrastructure programs across India.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-bodygrey">
            Whether you need a single JCB for a short civil works job or a fleet
            of HDD rigs for a multi-district fiber rollout, we bring the
            equipment, the operators, and the project discipline to get it done
            — on time, every time.
          </p>
        </div>
      </section>

      {/* Equipment fleet */}
      <section id="fleet" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="text-center">
            <Eyebrow className="justify-center">Our Equipment Fleet</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              The Machines Behind the Mission
            </h2>
          </div>

          <div className="mt-14 space-y-16 lg:space-y-24">
            <EquipmentBlock
              id="jcb"
              index="01"
              title="JCB / Excavators"
              image={IMG.jcb}
              alt="A yellow JCB backhoe excavator digging a deep trench along a roadside for underground cable-laying work, with safety barriers around the site."
              data={JCB}
            />
            <EquipmentBlock
              id="hdd"
              index="02"
              title="HDD Machines"
              subtitle="Horizontal Directional Drilling"
              image={IMG.hdd}
              alt="Close-up of a horizontal directional drilling (HDD) machine mid-operation, with drill rods and hydraulic components in sharp focus and an operator checking the controls."
              data={HDD}
              reverse
            />
          </div>

          {/* Additional equipment */}
          <div className="mt-16 rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-navy">
                <span className="text-brand">03</span> &nbsp;Additional Equipment
              </h3>
              <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                Available on request
              </span>
            </div>
            <span className="underline-accent mt-4" />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ADDITIONAL.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl bg-surface px-4 py-3 text-sm text-bodygrey"
                >
                  <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How the contract model works */}
      <section id="contract" className="scroll-mt-24 bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              <span className="h-[2px] w-8 rounded-full bg-sky-300" aria-hidden="true" />
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Our Contract Model
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(({ title, body }, i) => (
              <li
                key={title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-300 text-base font-bold text-navy">
                  {i + 1}
                </span>
                <p className="mt-5 font-semibold uppercase tracking-wide text-white">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contract terms available
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {CONTRACT_TERMS.map((term) => (
                <li
                  key={term}
                  className="rounded-full bg-sky-300/15 px-4 py-2 text-sm font-medium text-sky-100"
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="text-center">
            <Eyebrow className="justify-center">Sectors We Serve</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              Where Our Machinery Delivers
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-surface p-7 shadow-sm transition-colors hover:border-brand/40"
              >
                <ExcavatorIcon className="h-10 w-10 text-brand" />
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bodygrey">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why clients choose PKS + fleet image */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-2xl bg-navy shadow-card">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={IMG.fleet}
                  alt="A lineup of well-maintained heavy construction machinery — a yellow JCB excavator and an HDD rig — parked side by side at an equipment yard with workers in safety gear standing nearby."
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <Eyebrow>Why PKS Infratech</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
                Why Clients Choose Our Machinery Services
              </h2>
              <span className="underline-accent mt-4" />
              <ul className="mt-8 space-y-4">
                {REASONS.map((reason) => (
                  <li key={reason} className="flex gap-3 text-bodygrey">
                    <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need machinery for your next project?"
        body="Whether it's a single JCB for a week or an HDD fleet for a multi-month telecom rollout, PKS Infratech is ready to mobilize."
        cta="REQUEST A QUOTE"
      />
    </>
  );
}
