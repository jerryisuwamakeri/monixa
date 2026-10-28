import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import ProductGrid from "@/components/ProductGrid";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <section className="band">
        <div className={"shell"}>
          <div className={styles.rail}>
            <span className="mono">Error</span>
            <span className={`mono ${styles.code}`}>HTTP 404</span>
          </div>

          <div className={styles.body}>
            <p className={`num ${styles.big}`}>404</p>
            <div className={styles.copy}>
              <h1 className="displayL">
                This page isn&rsquo;t <span className="em">on the ledger</span>.
              </h1>
              <p className="lead">
                The address you followed does not match anything on Monixa. It
                may have moved, or it may never have existed. Either way, every
                page on the site is listed below.
              </p>
              <Link href="/" className={`btn ${styles.cta}`}>
                Back to the home page
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className={`shell ${styles.listHead}`}>
          <p className="mono">The six products</p>
        </div>
        <div className="shell">
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
