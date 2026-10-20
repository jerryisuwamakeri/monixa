import styles from "./StoreBadges.module.css";

/**
 * App Store and Google Play buttons, drawn inline so they inherit the site's
 * radius and dark/light treatment.
 *
 * The apps are not published yet, so these are not links — they render as
 * disabled buttons with a "coming soon" hint on hover and focus. When the
 * listings go live, turn each into an <a href> and drop the hint.
 */

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.05 12.78c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.74 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.14.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.29-.88-2.3-3.5ZM14.88 5.9c.6-.74 1.01-1.75.9-2.76-.87.04-1.93.58-2.56 1.3-.56.65-1.05 1.69-.92 2.68.97.08 1.96-.49 2.58-1.22Z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#34A853" d="M3.9 2.3 13.9 12 3.9 21.7a1.7 1.7 0 0 1-.6-1.3V3.6c0-.5.2-1 .6-1.3Z" />
      <path fill="#4285F4" d="M3.9 2.3a1.7 1.7 0 0 1 1.8-.1l8.6 4.9-2.5 2.4L3.9 2.3Z" />
      <path fill="#FBBC04" d="M17.9 9.6c1.1.6 1.1 2.2 0 2.8l-2.6 1.5-2.7-2.6 2.7-2.6 2.6.9Z" />
      <path fill="#EA4335" d="M5.7 21.8a1.7 1.7 0 0 1-1.8-.1l8-7.1 2.5 2.4-8.7 4.8Z" />
    </svg>
  );
}

const STORES = [
  { key: "ios", small: "Download on the", big: "App Store", Glyph: AppleGlyph, colour: false },
  { key: "android", small: "Get it on", big: "Google Play", Glyph: PlayGlyph, colour: true },
] as const;

type StoreBadgesProps = {
  /** Inverted sits on Midnight Indigo; paper sits on white. */
  variant?: "paper" | "ink";
  className?: string;
};

export default function StoreBadges({
  variant = "paper",
  className,
}: StoreBadgesProps) {
  return (
    <ul
      className={[styles.badges, className].filter(Boolean).join(" ")}
      data-variant={variant}
    >
      {STORES.map(({ key, small, big, Glyph, colour }) => (
        <li key={key} className={styles.slot}>
          <button
            type="button"
            className={styles.badge}
            disabled
            aria-disabled="true"
            aria-describedby={`store-hint-${key}`}
          >
            <span className={`${styles.glyph} ${colour ? styles.glyphColour : ""}`}>
              <Glyph />
            </span>
            <span className={styles.text}>
              <span className={styles.small}>{small}</span>
              <span className={styles.big}>{big}</span>
            </span>
          </button>
          <span role="tooltip" id={`store-hint-${key}`} className={styles.hint}>
            Coming soon
          </span>
        </li>
      ))}
    </ul>
  );
}
