import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowRight } from "./Icons";
import styles from "./CalloutCTA.module.css";

type CalloutCTAProps = {
  kicker?: string;
  title: string;
  body: string;
};

/**
 * The closing band. Deep forest rather than another ink section, so the end of
 * every page lands on a different colour from the sections above it.
 */
export default function CalloutCTA({
  kicker = "Get started",
  title,
  body,
}: CalloutCTAProps) {
  return (
    <section className={styles.callout}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`mono ${styles.kicker}`}>{kicker}</p>
          <h2 className={`displayM ${styles.title}`}>{title}</h2>
          <p className={styles.body}>{body}</p>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={`btn ${styles.btn}`}>
            Get started
            <ArrowRight />
          </Link>
          <a href={`mailto:${site.email}`} className={`${styles.email} num`}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
