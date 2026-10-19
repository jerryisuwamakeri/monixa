import Link from "next/link";
import { products } from "@/lib/nav";
import { toneFor } from "@/lib/tone";
import { ArrowRight, Icon } from "./Icons";
import styles from "./ProductGrid.module.css";

/**
 * The six products as cards: a coloured icon tile, the name, the line item.
 * Used on the home page, the About page and the 404 so the set always reads
 * the same way.
 */
export default function ProductGrid() {
  return (
    <ul className={styles.grid}>
      {products.map((p, i) => (
        <li key={p.href}>
          <Link href={p.href} className={`card cardHover ${styles.cardLink}`}>
            <span className="iconTile" data-tone={toneFor(i)}>
              <Icon name={p.icon} />
            </span>
            <span className={styles.name}>{p.title}</span>
            <span className={styles.note}>{p.summary}</span>
            <span className={styles.go}>
              Read more
              <ArrowRight size={13} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
