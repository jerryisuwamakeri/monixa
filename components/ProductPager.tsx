import Link from "next/link";
import { products } from "@/lib/nav";
import { ArrowRight } from "./Icons";
import styles from "./ProductPager.module.css";

/**
 * Prev / next across the six product pages. On a deliberately multi-page site
 * this is what stops each page feeling like a dead end.
 */
export default function ProductPager({ current }: { current: string }) {
  const i = products.findIndex((p) => p.href === current);
  if (i === -1) return null;

  const prev = products[(i - 1 + products.length) % products.length];
  const next = products[(i + 1) % products.length];
  if (!prev || !next) return null;

  return (
    <nav className={styles.pager} aria-label="Products">
      <Link href={prev.href} className={styles.side}>
        <span className={`mono ${styles.dir}`}>
          <span className={styles.arrowPrev} aria-hidden="true">
            <ArrowRight size={13} />
          </span>
          Previous
        </span>
        <span className={`displayS ${styles.name}`}>{prev.title}</span>
      </Link>

      <Link
        href={next.href}
        className={`${styles.side} ${styles.nextSide}`}
      >
        <span className={`mono ${styles.dir}`}>
          Next
          <span className={styles.arrowNext} aria-hidden="true">
            <ArrowRight size={13} />
          </span>
        </span>
        <span className={`displayS ${styles.name}`}>{next.title}</span>
      </Link>
    </nav>
  );
}
