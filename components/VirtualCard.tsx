import styles from "./VirtualCard.module.css";

type VirtualCardProps = {
  /** Shows the card in its frozen state — the control, made visible. */
  frozen?: boolean;
  label?: string;
};

/**
 * The card drawn in CSS rather than photographed: ink stock, a fine ruled
 * grid, and the number set in tabular mono. No gradient, no bevel, no glare —
 * it should look like it came off the same press as the rest of the site.
 */
export default function VirtualCard({
  frozen = false,
  label,
}: VirtualCardProps) {
  return (
    <figure className={styles.wrap}>
      <div
        className={styles.card}
        data-frozen={frozen ? "" : undefined}
        role="img"
        aria-label={
          frozen
            ? "Monixa virtual dollar card, frozen"
            : "Monixa virtual dollar card, active"
        }
      >
        <div className={styles.grid} aria-hidden="true" />

        <div className={styles.top}>
          <span className={styles.mark}>
            Monixa<i className={styles.dot} />
          </span>
          <span className={`mono ${styles.state}`}>
            {frozen ? "Frozen" : "Active"}
          </span>
        </div>

        <div className={styles.mid}>
          <span className={`num ${styles.number}`}>4512 •••• •••• 8830</span>
        </div>

        <div className={styles.bottom}>
          <span className={styles.field}>
            <span className={`mono ${styles.fieldLabel}`}>Exp</span>
            <span className={`num ${styles.fieldValue}`}>••/••</span>
          </span>
          <span className={styles.field}>
            <span className={`mono ${styles.fieldLabel}`}>CVV</span>
            <span className={`num ${styles.fieldValue}`}>•••</span>
          </span>
          <span className={`${styles.field} ${styles.currency}`}>
            <span className={`mono ${styles.fieldLabel}`}>Virtual</span>
            <span className={styles.fieldCcy}>USD</span>
          </span>
        </div>
      </div>

      {label ? (
        <figcaption className={`mono ${styles.caption}`}>{label}</figcaption>
      ) : null}
    </figure>
  );
}
