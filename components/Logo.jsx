import Link from "next/link";

/**
 * PKS Infratech brand mark + wordmark.
 *
 * The mark is a pure inline SVG (crisp at any size): three vertical
 * columns of increasing height in brand blue, set inside a subtle
 * rounded outline — a stylised skyline / open-book silhouette.
 */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="PKS Infratech — home">
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        role="img"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* subtle rounded outline */}
        <rect
          x="1.5"
          y="1.5"
          width="49"
          height="49"
          rx="12"
          stroke="#1E4A9C"
          strokeOpacity="0.28"
          strokeWidth="2"
        />
        {/* three columns of increasing height */}
        <rect x="14" y="26" width="6.5" height="16" rx="1.5" fill="#1E4A9C" />
        <rect x="22.75" y="18" width="6.5" height="24" rx="1.5" fill="#1E4A9C" />
        <rect x="31.5" y="11" width="6.5" height="31" rx="1.5" fill="#1E4A9C" />
      </svg>

      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className="font-display text-lg font-bold tracking-wide text-brand sm:text-xl">
          PRADEEP KUMAR SINGH
        </span>
        <span className="mt-0.5 border-b border-slate-300 pb-1 text-[11px] font-bold tracking-[0.18em] text-slate-600 sm:text-xs">
          INFRATECH PRIVATE LIMITED
        </span>
        <span className="mt-1 text-[9px] tracking-[0.28em] text-slate-400 sm:text-[10px]">
          ISO 9001:2015 CERTIFIED COMPANY
        </span>
      </span>
    </Link>
  );
}
