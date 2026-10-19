import { Icon, type IconName } from "./Icons";
import { toneFor, type Tone } from "@/lib/tone";
import styles from "./FeatureLedger.module.css";

export type Feature = {
  icon: IconName;
  title: string;
  body: string;
  /** Overrides the cycling brand tone for this item. */
  tone?: Tone;
};

type FeatureLedgerProps = {
  items: Feature[];
  /** Columns at desktop width. Two reads as a spread; one reads as a list. */
  columns?: 1 | 2;
};

/**
 * The workhorse for feature copy: a coloured icon tile, a title and a line of
 * body. Columns are separated by space rather than a rule.
 */
export default function FeatureLedger({
  items,
  columns = 2,
}: FeatureLedgerProps) {
  return (
    <ul className={styles.list} data-columns={columns}>
      {items.map((f, i) => (
        <li key={f.title} className={styles.item}>
          <span className="iconTile" data-tone={f.tone ?? toneFor(i)}>
            <Icon name={f.icon} />
          </span>
          <div className={styles.body}>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.text}>{f.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
