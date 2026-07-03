/* Line-art icons (~60px), drawn with currentColor so they inherit brand blue. */

function BlueprintIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="14" width="42" height="32" rx="2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M7 24h42M17 14v10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 40v-8h9v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* pencil */}
      <path d="M40 46l14-14 5 5-14 14-6 1z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M50 28l5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="32" cy="20" r="7" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="15" cy="24" r="5.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="49" cy="24" r="5.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 46c0-7 5.4-12 12-12s12 5 12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 44c0-5.2 3.8-9 9-9 1.2 0 2.3.2 3.3.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M58 44c0-5.2-3.8-9-9-9-1.2 0-2.3.2-3.3.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function CoinsIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      {/* stacked coins */}
      <ellipse cx="24" cy="19" rx="14" ry="5.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10 19v9c0 3 6.3 5.5 14 5.5S38 31 38 28v-9" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10 28v9c0 3 6.3 5.5 14 5.5S38 40 38 37v-9" stroke="currentColor" strokeWidth="2.2" />
      {/* rupee coin */}
      <circle cx="45" cy="42" r="12" stroke="currentColor" strokeWidth="2.2" />
      <path d="M41 37h8M41 41h8M48 37c0 4-3 5-7 5l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M12 12v40h42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="20" y="34" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="2.2" />
      <rect x="31" y="28" width="6" height="18" rx="1" stroke="currentColor" strokeWidth="2.2" />
      <rect x="42" y="22" width="6" height="24" rx="1" stroke="currentColor" strokeWidth="2.2" />
      {/* upward arrow */}
      <path d="M20 26l10-8 7 5 12-11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 12h8v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICES = [
  {
    title: "Project Advisory",
    desc: "End-to-end advisory for infrastructure projects across the lifecycle.",
    Icon: BlueprintIcon,
    href: "#services",
  },
  {
    title: "Corporate Advisory",
    desc: "Strategic counsel to navigate complex challenges and unlock business value.",
    Icon: PeopleIcon,
    href: "#services",
  },
  {
    title: "Funds Management",
    desc: "Disciplined investment approach to deliver sustainable returns.",
    Icon: CoinsIcon,
    href: "#services",
  },
  {
    title: "Portfolio Management",
    desc: "Active portfolio management to optimize performance and mitigate risk.",
    Icon: ChartIcon,
    href: "#services",
  },
];

export default function ServiceCards() {
  return (
    <section id="services" aria-label="Our services" className="bg-surface">
      <div className="mx-auto -mt-4 max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, desc, Icon, href }) => (
            <a
              key={title}
              href={href}
              className="group relative flex flex-col rounded-xl bg-white p-7 shadow-card ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Icon className="h-14 w-14 text-brand" />

              <h3 className="mt-6 text-base font-bold uppercase tracking-wide text-navy">
                {title}
              </h3>
              <span className="underline-accent mt-2" />

              <p className="mt-4 pr-6 text-sm leading-relaxed text-bodygrey">
                {desc}
              </p>

              <ArrowRight className="mt-6 self-end text-brand transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
