import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Eyebrow, CheckIcon } from "@/components/ui";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const metadata = {
  title: "About Us",
  description:
    "PKS Infratech is an ISO 9001:2015 certified infrastructure development and advisory company combining strategic advisory with on-ground execution across telecom, energy, and utility sectors.",
};

const VALUES = [
  {
    title: "Quality",
    body: "ISO 9001:2015 certified processes across advisory and execution.",
  },
  {
    title: "Reliability",
    body: "Well-maintained machinery fleet and disciplined project delivery.",
  },
  {
    title: "Partnership",
    body: "Long-term relationships with clients across telecom, energy, and public infrastructure.",
  },
  {
    title: "Integrity",
    body: "Transparent commercial terms and dependable execution timelines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        subtitle="An ISO 9001:2015 certified infrastructure development and advisory company — working at the intersection of strategy and on-ground execution."
      />

      {/* Who We Are */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="space-y-6 text-lg leading-relaxed text-navy">
            <TextGenerateEffect
              as="p"
              inView
              filter={false}
              words="Pradeep Kumar Singh Infratech Private Limited (PKS Infratech) is an ISO 9001:2015 certified infrastructure development and advisory company. We work at the intersection of strategic advisory and on-ground execution — helping our clients plan, finance, and build critical infrastructure across the telecom, energy, and utility sectors."
              className="font-normal"
            />
            <p>
              What sets us apart is our dual capability: we don't just advise on
              infrastructure projects, we execute them. Our in-house fleet of
              heavy machinery, including JCB excavators and Horizontal
              Directional Drilling (HDD) rigs, allows us to support clients
              directly on the ground — whether that's trenching, cabling,
              pipeline work, or civil earthwork — with the same discipline and
              quality standards we bring to our advisory practice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2 lg:py-20">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              To be India's most dependable infrastructure partner — combining
              sound financial and technical advisory with reliable,
              well-maintained execution capability, so our clients can build with
              confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <Eyebrow>Our Vision</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              To grow as a full-spectrum infrastructure enabler, recognized for
              quality, punctuality, and integrity, and to be the first call for
              telecom, energy, and utility companies undertaking large-scale
              infrastructure rollouts across India.
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="text-center">
            <Eyebrow className="justify-center">What We Stand For</Eyebrow>
            <TextGenerateEffect
              as="h2"
              inView
              words="Our Values"
              className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-slate-100 bg-surface p-6 shadow-sm"
              >
                <CheckIcon className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <h3 className="text-base font-bold text-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-bodygrey">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-10">
            <Eyebrow>Leadership</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              Founded by <strong>Pradeep Kumar Singh</strong>, the company brings
              together deep on-ground infrastructure experience with a
              structured, advisory-led approach to project delivery — built to
              serve clients who need both strategic guidance and dependable
              execution under one roof.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
