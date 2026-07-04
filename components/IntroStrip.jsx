import { Eyebrow } from "./ui";

/* The narrative strip that sits directly below the hero on the home page. */
export default function IntroStrip() {
  return (
    <section aria-label="Company introduction" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <Eyebrow className="justify-center">Who We Are</Eyebrow>
        <p className="mt-6 text-lg leading-relaxed text-navy sm:text-xl">
          Pradeep Kumar Singh Infratech Private Limited (PKS Infratech) is a
          trusted infrastructure execution and advisory partner, serving
          telecom, energy, and public-sector clients across India. From project
          advisory and corporate structuring to on-ground execution with our own
          fleet of heavy machinery, we deliver end-to-end infrastructure
          solutions built on reliability, technical expertise, and disciplined
          project management.
        </p>
      </div>
    </section>
  );
}
