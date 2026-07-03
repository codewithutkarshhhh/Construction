import Link from "next/link";

/* Shared small icons + primitives used across the interior pages. */

export function ArrowRight({ className = "", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Primary (filled) and secondary (outline) call-to-action links. */
export function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-white shadow-sm transition-colors hover:bg-[#173C82] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${className}`}
    >
      {children}
      <ArrowRight />
    </Link>
  );
}

export function OutlineButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-md border border-brand px-8 py-3.5 text-sm font-semibold tracking-[0.12em] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${className}`}
    >
      {children}
      <ArrowRight />
    </Link>
  );
}

/* Small uppercase eyebrow label with the brand accent bar. */
export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand ${className}`}
    >
      <span className="h-[2px] w-8 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}
