import type { Metadata } from "next";
import AppDownload from "@/components/AppDownload";
import CalloutCTA from "@/components/CalloutCTA";
import FeatureLedger, { type Feature } from "@/components/FeatureLedger";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Monixa is one app for every money move — a naira wallet, multi-chain crypto, gift cards, bill payments and a virtual dollar card on a single balance.",
};

/* What the account actually does for you. */
const CAPABILITIES: Feature[] = [
  {
    icon: "convert",
    title: "Earn on-chain, spend in naira",
    body: "Convert crypto into your naira wallet at a rate you see before you confirm, then pay a bill with it the same hour.",
  },
  {
    icon: "gauge",
    title: "Know the gift card rate first",
    body: "The valuation engine prices brand, region and denomination upfront, so you always know exactly what the card is worth to you.",
  },
  {
    icon: "globe",
    title: "Pay anywhere in dollars",
    body: "A virtual USD card built for cloud bills, software seats, ad spend and invoices priced in dollars.",
  },
  {
    icon: "statement",
    title: "Everything on one statement",
    body: "The sale, the conversion and the bill it paid sit together in a single history, each carrying the rate that applied.",
  },
];

/* How the product behaves, every time. */
const PRINCIPLES: Feature[] = [
  {
    icon: "gauge",
    title: "Quote before you commit",
    body: "Every conversion, valuation and card top-up shows the rate and the amount you will receive on the same screen as the confirm button.",
  },
  {
    icon: "ledger",
    title: "One statement, every leg",
    body: "A gift card sale, the conversion it funded and the bill it paid are three entries on one history, each carrying the rate that applied at the time.",
  },
  {
    icon: "freeze",
    title: "Controls in your hands",
    body: "Freezing the dollar card is a switch on your own screen, not a support ticket during business hours. The same goes for every control we ship.",
  },
  {
    icon: "naira",
    title: "Naira is a first-class balance",
    body: "Here your local currency is a wallet you hold, spend from and pay bills with — not just the exit at the end of a trade.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Monixa"
        title={
          <>
            One account for the money you earn and the money you{" "}
            <span className="em">spend</span>.
          </>
        }
        lead="Monixa is a financial platform built in Lagos for people whose income, savings and bills do not all live in the same currency — or the same app."
      />

      {/* ---------- What it is ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="One app"
              title="Doing all your money moves."
              tight
            />
          </Reveal>
          <Reveal delay={80} className={styles.prose}>
            <p className={styles.big}>
              Monixa holds your naira and your crypto in one account, converts
              between them at a rate you see upfront, and spends the result —
              on a bill, into a bank account, or through a virtual dollar card.
            </p>
            <p>
              Six products share one balance, one transaction history and one
              login. Sell a gift card in the morning, clear an electricity bill
              at noon, and settle a dollar invoice before the day is out —
              without moving money between apps to do it.
            </p>
            <p>
              Your money stays in one place and goes wherever you need it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- What you get ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="What you get"
              title="Built for how money actually moves."
              tight
            />
          </Reveal>
          <Reveal delay={80} className={styles.splitBody}>
            <FeatureLedger items={CAPABILITIES} columns={1} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="What we are building"
              title="Six products, one balance."
            />
          </Reveal>
          <Reveal delay={70}>
            <ProductGrid />
          </Reveal>
        </div>
      </section>

      {/* ---------- Principles ---------- */}
      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="How we build"
              title="Four things we always do."
            />
          </Reveal>
          <Reveal delay={70}>
            <FeatureLedger items={PRINCIPLES} columns={2} />
          </Reveal>
        </div>
      </section>

      <AppDownload />

      <CalloutCTA
        kicker="Get in touch"
        title="Questions about the build?"
        body={`Email reaches us fastest, and it reaches the people building the product. We read everything that comes into ${site.email}.`}
      />
    </>
  );
}
