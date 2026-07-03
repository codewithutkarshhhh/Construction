import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { Eyebrow } from "@/components/ui";

export const metadata = {
  title: "Insights",
  description:
    "Project updates, industry perspectives on telecom infrastructure and HDD technology, company announcements, and machinery fleet updates from PKS Infratech.",
};

const CATEGORIES = [
  "Project completion updates and case studies",
  "Industry insights on telecom infrastructure, HDD technology, and infrastructure financing",
  "Company announcements and certifications",
  "Machinery fleet expansion updates",
];

const ARTICLES = [
  {
    tag: "Technology",
    title: "Why HDD is Transforming Telecom Infrastructure Rollout in India",
    excerpt:
      "How horizontal directional drilling enables faster, less disruptive fiber-optic deployment across dense and challenging terrain.",
  },
  {
    tag: "Industry",
    title: "The Business Case for Contract Machinery in Infrastructure Projects",
    excerpt:
      "Why leading operators are choosing operator-ready equipment on contract over ownership for large-scale rollouts.",
  },
  {
    tag: "Company",
    title: "PKS Infratech's ISO 9001:2015 Certification Journey",
    excerpt:
      "A look at the quality-management processes behind our advisory and on-ground execution standards.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="News & Perspectives"
        subtitle="Project updates, industry perspectives, and company announcements from the PKS Infratech team."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="text-center">
            <Eyebrow className="justify-center">Coming Soon</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-navy sm:text-4xl">
              Featured Topics
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-bodygrey">
              We're preparing a series of articles across the following areas.
              Full posts will be published here as they become available.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTICLES.map(({ tag, title, excerpt }) => (
              <article
                key={title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-surface shadow-card"
              >
                <div className="relative flex h-36 items-center justify-center overflow-hidden bg-navy">
                  <div className="hero-pattern absolute inset-0 opacity-40" aria-hidden="true" />
                  <span className="relative rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                    {tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold leading-snug text-navy">
                    {title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-bodygrey">
                    {excerpt}
                  </p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand/60">
                    Article coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-slate-100 bg-surface p-8 sm:p-10">
            <Eyebrow>What You'll Find Here</Eyebrow>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-navy">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
