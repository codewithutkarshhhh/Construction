import { PrimaryButton } from "./ui";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

/**
 * Full-width closing call-to-action band on a navy field. Reused at the
 * bottom of most pages to drive visitors to Contact.
 */
export default function CTABand({
  title = "Ready to build with a partner who delivers?",
  body = "Get in touch with our team to discuss your project requirements — from advisory to execution.",
  cta = "GET IN TOUCH",
  href = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="hero-pattern pointer-events-none absolute inset-0 opacity-50"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
        <TextGenerateEffect
          as="h2"
          inView
          words={title}
          className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl"
        />
        <p className="mx-auto mt-5 max-w-2xl text-white/80">{body}</p>
        <div className="mt-9 flex justify-center">
          <PrimaryButton
            href={href}
            className="focus-visible:ring-offset-navy"
          >
            {cta}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
