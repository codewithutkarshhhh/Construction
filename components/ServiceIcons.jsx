/* Line-art icons (~60px), drawn with currentColor so they inherit brand blue.
   Shared between the home "Four Pillars" cards and the Services page. */

export function BlueprintIcon(props) {
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

export function PeopleIcon(props) {
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

export function CoinsIcon(props) {
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

export function ChartIcon(props) {
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

export function ExcavatorIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      {/* tracks */}
      <rect x="6" y="44" width="34" height="10" rx="5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="14" cy="49" r="2" fill="currentColor" />
      <circle cx="23" cy="49" r="2" fill="currentColor" />
      <circle cx="32" cy="49" r="2" fill="currentColor" />
      {/* cab */}
      <path d="M14 44v-9a3 3 0 013-3h9v12" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* arm */}
      <path d="M26 34l12-8 9 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* bucket */}
      <path d="M47 32l6 3-2 7-8-2 1-6z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}
