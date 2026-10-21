import Link from "next/link";
import AppDownload from "@/components/AppDownload";
import CalloutCTA from "@/components/CalloutCTA";
import DataPanel from "@/components/DataPanel";
import FeatureLedger, { type Feature } from "@/components/FeatureLedger";
import { ArrowRight, Icon, type IconName } from "@/components/Icons";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import StoreBadges from "@/components/StoreBadges";
import styles from "./home.module.css";

/* The six frictions this product exists to remove. */
const PROBLEMS: Feature[] = [
  {
    icon: "disconnect",
    title: "Trading sits apart from spending",
    body: "Crypto lives in one app and the electricity bill is paid in another. Value gets moved twice before it can actually be used.",
  },
  {
    icon: "priceTag",
    title: "Gift card rates are a guess",
    body: "Marketplaces quote after the fact. You learn what your card was worth once it has already left your hands.",
  },
  {
    icon: "globe",
    title: "International payments stall",
    body: "The subscriptions and invoices people need to settle are exactly the ones a naira card declines.",
  },
  {
    icon: "clock",
    title: "Crypto-to-fiat is slow",
    body: "Settlement that should take minutes takes a day, and the rate keeps moving while you wait on it.",
  },
  {
    icon: "cardOff",
    title: "Dollar cards are hard to get",
    body: "Access is inconsistent and usually gated behind yet another provider with its own balance to top up.",
  },
  {
    icon: "spark",
    title: "The experience is an afterthought",
    body: "Across African fintech and crypto apps, simple things take too many steps and explain themselves badly.",
  },
];

const FLOW: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "depositIn",
    title: "Fund",
    body: "Bank transfer in naira, a crypto deposit on any supported chain, or the payout from a gift card you sold.",
  },
  {
    icon: "wallet",
    title: "Hold",
    body: "Keep value in naira, in crypto, or split across both. One statement, one transaction history, one login.",
  },
  {
    icon: "card",
    title: "Spend",
    body: "Pay a bill, convert, withdraw to your bank, or load the dollar card and pay in USD.",
  },
];


export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="band">
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={`displayXL ${styles.h1}`}>
              Naira, crypto
              <br />
              and a <span className="em">dollar card</span>.
              <br />
              <span className="light">One account.</span>
            </h1>

            <p className={`lead ${styles.heroLead}`}>
              Monixa puts a fiat wallet, a multi-chain crypto wallet, gift cards,
              bill payments and a virtual USD card behind one login — so value
              you hold on-chain can settle an electricity bill or an
              international invoice without a detour through three other apps.
            </p>

            <StoreBadges className={styles.heroBadges} />

            <div className={styles.heroActions}>
              <Link href="/wallet" className="linkArrow">
                See what is inside the account
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <DataPanel
              variant="ink"
              title="Monixa · balances"
              meta="One statement"
              rows={[
                {
                  label: "Total value",
                  value: "₦ 4,182,650.00",
                  valueSub: "≈ $ 2,604.12",
                  emphasis: true,
                },
                {
                  label: "Naira wallet",
                  sub: "NGN · fiat",
                  value: "₦ 1,204,500.00",
                },
                {
                  label: "Tether",
                  sub: "USDT · multi-chain",
                  value: "1,840.22",
                  valueSub: "USDT",
                },
                {
                  label: "Bitcoin",
                  sub: "BTC · native",
                  value: "0.00841",
                  valueSub: "BTC",
                },
                {
                  label: "Dollar card",
                  sub: "Virtual · USD",
                  value: "$ 312.40",
                  tone: "accent",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="onInk band">
        <div className={`shell pad ${styles.problem}`}>
          <Reveal>
            <SectionHead
              kicker="The problem"
              title={
                <>
                  Your money lives in six apps that{" "}
                  <span className="emInv">don&rsquo;t talk</span>.
                </>
              }
              lead="Every one of them holds a different piece of your balance, and the gaps between them are where the time and the money go."
            />
          </Reveal>
          <Reveal delay={90} className={styles.problemList}>
            <FeatureLedger items={PROBLEMS} columns={2} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.productsHead}`}>
          <Reveal>
            <SectionHead
              kicker="What Monixa does"
              wide
              title="Six products on one balance sheet."
              lead="Each one has its own page, because each one is a real piece of infrastructure rather than a feature bullet."
            />
          </Reveal>
        </div>
        <div className="shell">
          <Reveal>
            <ProductGrid />
          </Reveal>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.flowWrap}`}>
          <Reveal>
            <SectionHead
              kicker="How it works"
              title="Three moves, no detours."
            />
          </Reveal>

          <Reveal delay={80}>
            <ul className={styles.flow}>
              {FLOW.map((step) => (
                <li key={step.title} className={styles.flowStep}>
                  <span className={styles.flowIcon}>
                    <Icon name={step.icon} />
                  </span>
                  <h3 className={`displayS ${styles.flowTitle}`}>
                    {step.title}
                  </h3>
                  <p className={styles.flowBody}>{step.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <AppDownload />

      <CalloutCTA
        title="Tell us what you would move over first."
        body="Tell us what you would move into Monixa first, and what you are using for it today. We read every message and reply by email."
      />
    </>
  );
}
