import type { Metadata } from "next";
import CalloutCTA from "@/components/CalloutCTA";
import DataPanel from "@/components/DataPanel";
import FeatureLedger, { type Feature } from "@/components/FeatureLedger";
import PageHero from "@/components/PageHero";
import ProductPager from "@/components/ProductPager";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import styles from "../product.module.css";

export const metadata: Metadata = {
  title: "Gift Card Marketplace",
  description:
    "Buy digital gift cards instantly and sell yours against an automated valuation that is shown before you commit, with payout straight into your naira wallet.",
};

const FEATURES: Feature[] = [
  {
    icon: "gift",
    title: "Buy digital gift cards",
    body: "Pick a brand and a denomination, pay from whichever balance you are holding, and get the code delivered in the app.",
  },
  {
    icon: "cardUp",
    title: "Sell gift cards",
    body: "Submit the card, read the quote the valuation engine returns, and accept it. The naira lands in your wallet against the same transaction record.",
  },
  {
    icon: "gauge",
    title: "Automated valuation engine",
    body: "Rates are computed per brand, region and denomination rather than negotiated by hand — so the same card gets the same number every time you bring it.",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        kicker="Gift card marketplace"
        title={
          <>
            A rate you can see
            <br />
            <span className="em">before</span> you sell.
          </>
        }
        lead="Gift card marketplaces are opaque by habit: you find out what your card was worth once it has already left your hands. The valuation engine prices it up front instead."
        specs={[
          { term: "Buy", value: "Instant delivery" },
          { term: "Sell", value: "Automated quote" },
          { term: "Pricing", value: "Shown up front" },
          { term: "Payout", value: "Naira wallet" },
          { term: "Record", value: "Unified ledger" },
        ]}
      />

      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="Capabilities"
              title="Three things, done properly."
              tight
            />
          </Reveal>
          <Reveal delay={80} className={styles.splitBody}>
            <FeatureLedger items={FEATURES} columns={1} />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.visual}`}>
          <Reveal>
            <DataPanel
              title="Valuation"
              meta="Before you commit"
              rows={[
                { label: "Brand", value: "iTunes" },
                { label: "Region", value: "United States" },
                { label: "Denomination", value: "$ 100.00" },
                { label: "Rate", sub: "Per dollar, this brand", value: "₦ 1,420.00", tone: "muted" },
                {
                  label: "You receive",
                  value: "₦ 142,000.00",
                  tone: "accent",
                  emphasis: true,
                },
              ]}
            />
          </Reveal>

          <Reveal delay={90} className={styles.visualCopy}>
            <h2 className="displayM">
              The quote arrives before the card does.
            </h2>
            <p>
              Brand, region and denomination all move the price of a gift card.
              An engine that reads all three can commit to a number in advance —
              a person quoting by hand cannot, which is why the number usually
              arrives late.
            </p>
            <div className={styles.note}>
              <span className={`mono ${styles.noteLabel}`}>Payout</span>
              <p className={styles.noteText}>
                Accepted quotes settle into your naira balance, where the same
                value can go straight out to a bill, a bank account or the
                dollar card.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="The difference"
              title="Quoted after versus quoted before."
            />
          </Reveal>

          <Reveal delay={70}>
            <div className={styles.compare}>
              <div className={`${styles.compareCol} ${styles.compareBad}`}>
                <p className={`mono ${styles.compareHead}`}>
                  <span>Quoted after</span>
                </p>
                <ul className={styles.compareList}>
                  <li>
                    <span>01</span>
                    <span>You hand over the card and wait to be told.</span>
                  </li>
                  <li>
                    <span>02</span>
                    <span>
                      The rate depends on who is doing the quoting that day.
                    </span>
                  </li>
                  <li>
                    <span>03</span>
                    <span>
                      Declining the number is awkward once the code is gone.
                    </span>
                  </li>
                  <li>
                    <span>04</span>
                    <span>
                      No way to compare what the same card earned last time.
                    </span>
                  </li>
                </ul>
              </div>

              <div className={`${styles.compareCol} ${styles.compareGood}`}>
                <p className={`mono ${styles.compareHead}`}>
                  <span>Quoted before — Monixa</span>
                </p>
                <ul className={styles.compareList}>
                  <li>
                    <span>01</span>
                    <span>
                      The engine returns a firm number from brand, region and
                      denomination.
                    </span>
                  </li>
                  <li>
                    <span>02</span>
                    <span>
                      The same card gets the same rate however often you bring
                      it.
                    </span>
                  </li>
                  <li>
                    <span>03</span>
                    <span>
                      You accept or walk away before anything changes hands.
                    </span>
                  </li>
                  <li>
                    <span>04</span>
                    <span>
                      Every accepted quote stays on your transaction history.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/gift-cards" />
      </div>

      <CalloutCTA
        title="Tell us which brands to price first."
        body="The valuation engine ships with a brand list. Email us the cards you actually hold and they go to the front of it."
      />
    </>
  );
}
