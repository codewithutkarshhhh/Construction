import PageHeader from "@/components/PageHeader";
import MarqueeBand from "@/components/MarqueeBand";
import CTABand from "@/components/CTABand";
import { Eyebrow, PrimaryButton } from "@/components/ui";
import { ExcavatorIcon } from "@/components/ServiceIcons";
import { CLIENTS } from "@/components/ClientLogos";

export const metadata = {
  title: "About Us",
  description:
    "PKS Infratech is an ISO 9001:2012 certified infrastructure development and advisory company combining strategic advisory with on-ground execution across telecom, energy, and utility sectors.",
};

/* Proven, whitelisted image sources already used elsewhere on the site
   (Hero + ImageBand), so they load reliably in production. */
const MAIN_IMAGE =
  "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1600&q=80";
const SECONDARY_IMAGE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260703_183914_494e037f-eaf4-4810-be4a-f380af0483b6.png";

const ACHIEVEMENTS = [
  { value: "2012", label: "Year the company was registered" },
  { value: "10+", label: "Client organizations served" },
  { value: "3", label: "Core sectors — telecom, energy & utility" },
  { value: "100%", label: "In-house execution capability" },
  { value: "ISO 9001", label: "2012 certified processes" },
];

export default function AboutPage() {
  return (
    <div className="page-about">
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        subtitle="An ISO 9001:2012 certified infrastructure development and advisory company — working at the intersection of strategy and on-ground execution."
        bgImage="https://d8j0ntlcm91z4.cloudfront.net/user_3DOQayCkzLWb1jKyvrHBg2t8TL6/hf_20260704_171422_57848346-b906-441a-ba1d-a28a27877148.png"
      />

      {/* Intro + image grid (About-block style) */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
                Advisory rigor meets on-ground execution
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-bodygrey">
              Registered in 2012, Pradeep Kumar Singh Infratech Private Limited
              (PKS Infratech) helps clients plan and build critical infrastructure
              across the telecom, energy, and utility sectors. What sets us
              apart is our dual capability — we don&apos;t just advise, we
              execute.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MAIN_IMAGE}
              alt="PKS Infratech infrastructure and construction site"
              loading="lazy"
              className="size-full max-h-[620px] rounded-2xl object-cover shadow-card lg:col-span-2"
            />

            <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-7 shadow-card md:w-1/2 lg:w-auto">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ExcavatorIcon className="h-7 w-7" />
                </span>
                <div>
                  <p className="mb-2 text-lg font-bold text-navy">
                    In-house heavy machinery
                  </p>
                  <p className="text-sm leading-relaxed text-bodygrey">
                    Our JCB excavators and HDD rigs let us execute directly on
                    site — trenching, cabling, and pipeline work — to the same
                    standard as our advisory practice.
                  </p>
                </div>
                <PrimaryButton
                  href="/services#machinery"
                  className="mr-auto px-6 py-3 text-xs"
                >
                  EXPLORE MACHINERY
                </PrimaryButton>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SECONDARY_IMAGE}
                alt="Infrastructure delivery by PKS Infratech"
                loading="lazy"
                className="grow basis-0 rounded-2xl object-cover shadow-card md:w-1/2 lg:min-h-0 lg:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-4 sm:px-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              To be India&apos;s most dependable infrastructure partner —
              combining sound financial and technical advisory with reliable,
              well-maintained execution capability, so our clients can build
              with confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              To grow as a full-spectrum infrastructure enabler, recognized for
              quality, punctuality, and integrity — the first call for telecom,
              energy, and utility companies undertaking large-scale rollouts
              across India.
            </p>
          </div>
        </div>
      </section>

      <MarqueeBand
        tone="white"
        rows={["ADVISORY RIGOR • ON-GROUND EXECUTION • "]}
      />

      {/* Trusted-by logo row */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-bodygrey">
            Trusted across telecom, energy &amp; infrastructure
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {CLIENTS.map(({ name, logo }) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={name}
                src={logo}
                alt={`${name} logo`}
                title={name}
                loading="lazy"
                className="h-7 w-auto max-w-[130px] object-contain md:h-8"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / capabilities in numbers */}
      <section>
        <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-navy p-10 shadow-card md:p-16">
            <div className="relative z-10 flex flex-col gap-4 text-center md:text-left">
              <Eyebrow className="justify-center text-sky-300 md:justify-start">
                By The Numbers
              </Eyebrow>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Our capabilities at a glance
              </h2>
              <p className="max-w-xl text-white/70 md:mx-0">
                One partner for both the boardroom and the ground — advisory
                depth backed by an owner-operated machinery fleet.
              </p>
            </div>

            <div className="relative z-10 mt-12 grid grid-cols-2 gap-8 text-center md:flex md:flex-wrap md:justify-between md:text-left">
              {ACHIEVEMENTS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-2 md:max-w-[180px]">
                  <span className="text-4xl font-bold text-white md:text-5xl">
                    {value}
                  </span>
                  <p className="text-sm leading-snug text-white/70">{label}</p>
                </div>
              ))}
            </div>

            {/* decorative grid overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1 right-1 z-0 hidden h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"
            />
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
