import StoreBadges from "./StoreBadges";
import styles from "./AppDownload.module.css";

type AppDownloadProps = {
  kicker?: string;
  title?: string;
  body?: string;
};

/** Rows for the phone screen. Laid out here rather than reusing DataPanel,
 *  which is built for full-width columns and crowds at phone width. */
const BALANCES = [
  { name: "Naira wallet", meta: "NGN", value: "₦ 1,204,500.00" },
  { name: "Tether", meta: "USDT", value: "1,840.22" },
  { name: "Bitcoin", meta: "BTC", value: "0.00841" },
  { name: "Dollar card", meta: "Virtual · USD", value: "$ 312.40" },
];

export default function AppDownload({
  kicker = "Get the app",
  title = "Your whole account, in your pocket.",
  body = "Everything on this site runs in the Monixa app — the naira and crypto wallets, gift cards, bill payments and the dollar card. Free to download, free to open an account.",
}: AppDownloadProps) {
  return (
    <section className={`onInk ${styles.section}`}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={`mono ${styles.kicker}`}>{kicker}</p>
          <h2 className={`displayM ${styles.title}`}>{title}</h2>
          <p className={styles.body}>{body}</p>

          <StoreBadges variant="ink" className={styles.badges} />

          <p className={styles.note}>
            Coming soon to iOS and Android. One account will work across both.
          </p>
        </div>

        <div className={styles.phoneWrap} aria-hidden="true">
          <div className={styles.phone}>
            <div className={styles.notch} />

            <div className={styles.screen}>
              <div className={styles.screenHead}>
                <span className={styles.screenBrand}>Monixa</span>
                <span className={styles.screenTag}>Balances</span>
              </div>

              <div className={styles.total}>
                <span className={styles.totalLabel}>Total value</span>
                <span className={`num ${styles.totalValue}`}>
                  ₦ 4,182,650.00
                </span>
                <span className={`num ${styles.totalSub}`}>≈ $ 2,604.12</span>
              </div>

              <ul className={styles.rows}>
                {BALANCES.map((b) => (
                  <li key={b.name} className={styles.row}>
                    <span className={styles.rowLeft}>
                      <span className={styles.rowName}>{b.name}</span>
                      <span className={styles.rowMeta}>{b.meta}</span>
                    </span>
                    <span className={`num ${styles.rowValue}`}>{b.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
