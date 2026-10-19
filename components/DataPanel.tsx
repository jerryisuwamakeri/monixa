import styles from "./DataPanel.module.css";

export type DataRow = {
  label: string;
  /** Secondary line under the label. */
  sub?: string;
  value: string;
  /** Mono line under the value. */
  valueSub?: string;
  /** Render larger — use for the headline figure of a panel. */
  emphasis?: boolean;
  tone?: "accent" | "muted" | "positive";
};

type DataPanelProps = {
  title: string;
  meta?: string;
  rows: DataRow[];
  foot?: string;
  /** Inverted panels carry the accent as a signal colour. */
  variant?: "paper" | "ink";
};

/**
 * Product chrome, built from type and rules rather than a screenshot.
 * Tabular numerals and hairline rows do the work a device mockup usually
 * does, and it stays legible at every width.
 */
export default function DataPanel({
  title,
  meta,
  rows,
  foot,
  variant = "paper",
}: DataPanelProps) {
  return (
    <figure className={styles.panel} data-variant={variant}>
      <div className={styles.head}>
        <span className={`mono ${styles.title}`}>{title}</span>
        {meta ? <span className={`mono ${styles.meta}`}>{meta}</span> : null}
      </div>

      <div className={styles.rows}>
        {rows.map((r) => (
          <div
            key={r.label}
            className={styles.row}
            data-emphasis={r.emphasis ? "" : undefined}
            data-tone={r.tone}
          >
            <span className={styles.labelWrap}>
              <span className={styles.label}>{r.label}</span>
              {r.sub ? <span className={styles.sub}>{r.sub}</span> : null}
            </span>
            <span className={styles.valueWrap}>
              <span className={`num ${styles.value}`}>{r.value}</span>
              {r.valueSub ? (
                <span className={`mono ${styles.valueSub}`}>{r.valueSub}</span>
              ) : null}
            </span>
          </div>
        ))}
      </div>

      {foot ? <figcaption className={`mono ${styles.foot}`}>{foot}</figcaption> : null}
    </figure>
  );
}
