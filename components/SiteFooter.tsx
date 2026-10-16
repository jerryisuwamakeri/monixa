import Link from "next/link";
import { companyLinks, products } from "@/lib/nav";
import { site, socials } from "@/lib/site";
import { SocialIcon, type SocialName } from "./Icons";
import StoreBadges from "./StoreBadges";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.top}`}>
        <div className={styles.brand}>
          <p className={styles.mark}>
            <span className={styles.markDot} aria-hidden="true" />
            {site.name}
          </p>
          <p className={styles.blurb}>
            One account for naira, crypto, gift cards, bills and a virtual
            dollar card.
          </p>

          <StoreBadges className={styles.footerBadges} />

          <ul className={styles.social}>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} on ${s.name}`}
                >
                  <SocialIcon name={s.icon as SocialName} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.col} aria-label="Products">
          <h2 className={`mono ${styles.colHead}`}>Products</h2>
          <ul>
            {products.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Company">
          <h2 className={`mono ${styles.colHead}`}>Company</h2>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={`mono ${styles.colHead}`}>Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <address className={styles.address}>{site.address}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className={`shell ${styles.bottom}`}>
        <p>
          © {year} {site.name}
        </p>
        <p>
          <a href={`https://${site.domain}`}>{site.domain}</a>
        </p>
      </div>
    </footer>
  );
}
