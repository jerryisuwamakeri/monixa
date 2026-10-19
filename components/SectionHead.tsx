import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  /** Small label above the heading, e.g. "The problem". */
  kicker: string;
  /** Right-aligned meta label. */
  meta?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Narrow heading column, for sections with a wide body beside them. */
  tight?: boolean;
  /**
   * Full-width sections: sets the heading and the lead side by side so the
   * row gets used rather than leaving half of it empty. Opt-in, because this
   * component also sits inside narrow grid columns.
   */
  wide?: boolean;
};

/**
 * The repeating section opener: a small label, a heading, and an optional
 * lead. Every section on the site uses it, which is what keeps nine separate
 * pages reading as one piece of design.
 */
export default function SectionHead({
  kicker,
  meta,
  title,
  lead,
  tight = false,
  wide = false,
}: SectionHeadProps) {
  const twoUp = wide && Boolean(lead);

  return (
    <header
      className={[
        styles.head,
        tight ? styles.tight : "",
        twoUp ? styles.wide : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.rail}>
        <span className="mono">{kicker}</span>
        {meta ? <span className={`mono ${styles.meta}`}>{meta}</span> : null}
      </div>

      <div className={styles.body}>
        <h2 className={`displayM ${styles.title}`}>{title}</h2>
        {lead ? <p className={`lead ${styles.lead}`}>{lead}</p> : null}
      </div>
    </header>
  );
}
