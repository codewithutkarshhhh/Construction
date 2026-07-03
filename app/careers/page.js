import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Eyebrow, ArrowRight } from "@/components/ui";

export const metadata = {
  title: "Careers",
  description:
    "Join PKS Infratech — we're hiring machinery operators, site engineers, project managers, and financial advisors committed to quality and reliability in infrastructure delivery.",
};

const CAREERS_EMAIL = "pksinghpvtltd@gmail.com";

const OPENINGS = [
  {
    title: "HDD & Heavy Machinery Operators",
    body: "Skilled operators for HDD rigs, excavators, and specialized equipment on infrastructure sites.",
  },
  {
    title: "Site Supervisors / Project Engineers",
    body: "On-ground leadership for trenching, cabling, pipeline, and civil earthwork execution.",
  },
  {
    title: "Project Advisory & Finance Associates",
    body: "Support techno-financial planning, structuring, and fund administration across the project lifecycle.",
  },
  {
    title: "Business Development Executives",
    body: "Build client relationships across telecom, energy, and infrastructure sectors.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join PKS Infratech"
        subtitle="We're always looking for skilled professionals who share our commitment to quality and reliability in infrastructure delivery."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-lg leading-relaxed text-navy">
            From machinery operators and site engineers to project managers and
            financial advisors, PKS Infratech brings together people who take
            pride in dependable, high-quality infrastructure delivery.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="text-center">
            <Eyebrow className="justify-center">Current Opportunities</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              Roles We Hire For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-bodygrey">
              Current opportunities may include the following roles.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {OPENINGS.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
              >
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <span className="underline-accent mt-2" />
                <p className="mt-4 text-sm leading-relaxed text-bodygrey">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              How to Apply
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Send your resume to{" "}
              <span className="font-semibold text-sky-300">{CAREERS_EMAIL}</span>{" "}
              with the position you're applying for in the subject line.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=Job Application`}
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              EMAIL YOUR RESUME
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <CTABand
        title="Don't see your role listed?"
        body="We'd still like to hear from talented people. Reach out and tell us how you can contribute."
        cta="CONTACT US"
      />
    </>
  );
}
