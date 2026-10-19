import { Icon, type IconName } from "./Icons";
import { toneFor, type Tone } from "@/lib/tone";
import styles from "./Matrix.module.css";

export type Tile = {
  icon: IconName;
  label: string;
  note?: string;
  tone?: Tone;
};

type MatrixProps = {
  items: Tile[];
  /** Minimum tile width; controls how many fit per row. */
  min?: number;
};

/**
 * A grid of cards — rails, billers, destinations. Each sits on a soft shadow
 * rather than a border, so the grid needs no dividing rules.
 */
export default function Matrix({ items, min = 190 }: MatrixProps) {
  return (
    <ul className={styles.matrix} style={{ ["--min" as string]: `${min}px` }}>
      {items.map((t, i) => (
        <li key={t.label} className={`card cardHover ${styles.tile}`}>
          <span className="iconTile" data-tone={t.tone ?? toneFor(i)}>
            <Icon name={t.icon} />
          </span>
          <span className={styles.label}>{t.label}</span>
          {t.note ? <span className={styles.note}>{t.note}</span> : null}
        </li>
      ))}
    </ul>
  );
}
