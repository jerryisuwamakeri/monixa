"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { companyLinks, products } from "@/lib/nav";
import { site, socials } from "@/lib/site";
import { toneFor } from "@/lib/tone";
import { Icon, SocialIcon, type SocialName } from "./Icons";
import styles from "./SiteHeader.module.css";

/** Matches the CSS breakpoint where the desktop nav is replaced by the menu. */
const MOBILE_QUERY = "(max-width: 920px)";

export default function SiteHeader() {
  const pathname = usePathname();
  const [panelOpen, setPanelOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  /* Hover intent: opening is instant, closing waits a beat so the pointer can
     cross the gap between the trigger and the panel without it vanishing. */
  const openPanel = useCallback(() => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setPanelOpen(true);
  }, []);

  const closePanelSoon = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanelOpen(false), 220);
  }, []);

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const isActive = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname],
  );

  const onProductPage = products.some((p) => isActive(p.href));

  /* Close on navigation. Tapping the link you are already on does not change
     the pathname, so links also close the menu directly on click. */
  useEffect(() => {
    setPanelOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Escape closes whichever layer is open. */
  useEffect(() => {
    if (!panelOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanelOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen, menuOpen]);

  /* Pointer outside the products cluster dismisses the dropdown. */
  useEffect(() => {
    if (!panelOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!productsRef.current?.contains(e.target as Node)) setPanelOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [panelOpen]);

  /* Growing past the breakpoint while the menu is open would otherwise leave
     an invisible overlay covering the page. */
  useEffect(() => {
    if (!menuOpen) return;
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [menuOpen]);

  /* Lock the page behind the menu. */
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  /* Move focus into the menu on open, return it to the burger on close, and
     keep Tab inside while it is open. */
  useEffect(() => {
    if (!menuOpen) return;
    const panel = menuRef.current;
    if (!panel) return;

    const focusables = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0] as HTMLElement;
      const last = items[items.length - 1] as HTMLElement;
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !panel.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => {
      panel.removeEventListener("keydown", onKeyDown);
      burgerRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.bar}`}>
        <Link href="/" className={styles.mark} aria-label="Monixa — home">
          <span className={styles.markDot} aria-hidden="true" />
          Monixa
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <div
            className={styles.productsWrap}
            ref={productsRef}
            onMouseEnter={openPanel}
            onMouseLeave={closePanelSoon}
            onFocus={openPanel}
            onBlur={closePanelSoon}
          >
            <button
              type="button"
              className={`${styles.link} ${onProductPage ? styles.linkActive : ""}`}
              aria-expanded={panelOpen}
              aria-controls="products-panel"
              onClick={() => setPanelOpen((v) => !v)}
            >
              Products
              <svg
                className={`${styles.chev} ${panelOpen ? styles.chevOpen : ""}`}
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 1.25 4.5 4.75 8 1.25" />
              </svg>
            </button>

            <div
              className={`${styles.panelDock} ${panelOpen ? styles.panelDockOpen : ""}`}
              hidden={!panelOpen}
            >
              <div id="products-panel" className={styles.panel}>
                <ul className={styles.panelList}>
                  {products.map((p, i) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className={styles.panelItem}
                        aria-current={isActive(p.href) ? "page" : undefined}
                      >
                        <span className="iconTile" data-size="sm" data-tone={toneFor(i)}>
                          <Icon name={p.icon} size={18} />
                        </span>
                        <span className={styles.panelBody}>
                          <span className={styles.panelLabel}>{p.title}</span>
                          <span className={styles.panelNote}>{p.navNote}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className={styles.panelFoot}>
                  <span className={styles.panelFootText}>
                    Six products, one account.
                  </span>
                  <Link href="/about" className={styles.panelFootLink}>
                    How it fits together
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {companyLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${isActive(l.href) ? styles.linkActive : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={`btn ${styles.cta}`}>
          Get started
        </Link>

        <button
          ref={burgerRef}
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="srOnly">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`${styles.burgerBox} ${menuOpen ? styles.burgerOpen : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        hidden={!menuOpen}
      >
        <div className={`shell ${styles.overlayInner}`}>
          <p className={`mono ${styles.overlayLabel}`}>Products</p>
          <ul className={styles.overlayProducts}>
            {products.map((p, i) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  onClick={closeMenu}
                  aria-current={isActive(p.href) ? "page" : undefined}
                >
                  <span className="iconTile" data-size="sm" data-tone={toneFor(i)}>
                    <Icon name={p.icon} size={18} />
                  </span>
                  <span className={styles.panelBody}>
                    <span className={styles.panelLabel}>{p.title}</span>
                    <span className={styles.panelNote}>{p.navNote}</span>
                  </span>
                  <span className={styles.overlayChev} aria-hidden="true">
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m1 1 5 5-5 5" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className={`mono ${styles.overlayLabel}`}>Company</p>
          <ul className={styles.overlayList}>
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeMenu}
                  aria-current={isActive(l.href) ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.overlayFoot}>
            <Link href="/contact" className="btn" onClick={closeMenu}>
              Get started
            </Link>

            <a href={`mailto:${site.email}`} className={styles.overlayMail}>
              {site.email}
            </a>

            <ul className={styles.overlaySocial}>
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${site.name} on ${s.name}`}
                  >
                    <SocialIcon name={s.icon as SocialName} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
