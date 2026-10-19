import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";
import styles from "./PageHero.module.css";

export type Spec = { term: string; value: string };

type PageHeroProps = {
  kicker: string;
  title: ReactNode;
  lead: ReactNode;
  /** Short facts listed beside the headline. */
  specs?: Spec[];
  /** Primary action. Defaults to the contact page. */
  action?: { href: string; label: string };
  inverted?: boolean;
};

/**
 * Every page above the fold: a small label, a headline in the left columns,
 * and a short list of facts in the right rail. No background image, no
 * gradient — the whitespace does the work.
 */
export default function PageHero({
  kicker,
  title,
  lead,
  specs,
  action = { href: "/contact", label: "Get started" },
  inverted = false,
}: PageHeroProps) {
  return (
    <section className={`${inverted ? "onInk " : ""}band`}>
      <div className={`shell ${styles.grid}`}>
        <div className={styles.main}>
          <p className={`mono ${styles.kicker}`}>{kicker}</p>

          <h1 className={`displayL ${styles.title}`}>{title}</h1>
          <p className={`lead ${styles.lead}`}>{lead}</p>

          <div className={styles.actions}>
            <Link href={action.href} className="btn">
              {action.label}
              <ArrowRight />
            </Link>
          </div>
        </div>

        {specs?.length ? (
          <aside className={styles.specs} aria-label="At a glance">
            <dl className={styles.specList}>
              {specs.map((s) => (
                <div key={s.term} className={styles.specRow}>
                  <dt>{s.term}</dt>
                  <dd className={`num ${styles.specValue}`}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
