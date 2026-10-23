import type { Metadata } from "next";
import CalloutCTA from "@/components/CalloutCTA";
import DataPanel from "@/components/DataPanel";
import FeatureLedger, { type Feature } from "@/components/FeatureLedger";
import PageHero from "@/components/PageHero";
import ProductPager from "@/components/ProductPager";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import VirtualCard from "@/components/VirtualCard";
import styles from "../product.module.css";
import card from "./card.module.css";

export const metadata: Metadata = {
  title: "Monixa Dollar Card",
  description:
    "A virtual USD card linked to your Monixa wallet, funded by converting crypto, for international payments — with freeze and unfreeze in your own hands.",
};

const FEATURES: Feature[] = [
  {
    icon: "card",
    title: "Virtual USD card",
    body: "Issued in the app and ready to use immediately. There is no plastic to wait for and nothing to activate by phone.",
  },
  {
    icon: "globe",
    title: "International payments",
    body: "Built for the checkouts that decline a naira card — software subscriptions, cloud bills, ad spend, invoices priced in dollars.",
  },
  {
    icon: "convert",
    title: "Funded by crypto conversion",
    body: "Top the card up by converting from your crypto balance at a quoted rate. The conversion and the funding both show on your statement.",
  },
  {
    icon: "freeze",
    title: "Freeze and unfreeze",
    body: "Stop the card from your own screen the moment something looks wrong, and turn it back on when it does not. No support ticket in between.",
  },
];

export default function DollarCardPage() {
  return (
    <>
      <PageHero
        kicker="Monixa dollar card"
        inverted
        title={
          <>
            A dollar card your
            <br />
            naira card <span className="emInv">can&rsquo;t be</span>.
          </>
        }
        lead="A virtual USD card linked to your Monixa wallet and funded by converting crypto you already hold — for the subscriptions, invoices and checkouts that keep getting declined."
        specs={[
          { term: "Type", value: "Virtual" },
          { term: "Currency", value: "USD" },
          { term: "Funding", value: "Crypto conversion" },
          { term: "Controls", value: "Freeze / unfreeze" },
          { term: "Use", value: "International" },
        ]}
      />

      {/* The card itself, on ink, with the funding ledger beside it. */}
      <section className="onInk band">
        <div className={`shell pad ${card.showcase}`}>
          <Reveal className={card.cardSlot}>
            <VirtualCard label="Active — ready to spend" />
          </Reveal>

          <Reveal delay={90} className={styles.visualCopy}>
            <h2 className="displayM">
              Fund it from crypto, spend it in dollars.
            </h2>
            <p>
              The card is not a separate product with its own top-up problem. It
              draws on the balance already sitting in your Monixa wallet, so
              value you hold on-chain becomes spendable dollars in one
              conversion.
            </p>
            <div className={styles.note}>
              <span className={`mono ${styles.noteLabel}`}>Why it matters</span>
              <p className={styles.noteText}>
                Section 2 names limited access to virtual dollar cards and
                difficult international payments as two of the six core
                frictions. This product answers both.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="Capabilities"
              title="What the card does."
              tight
            />
          </Reveal>
          <Reveal delay={80} className={styles.splitBody}>
            <FeatureLedger items={FEATURES} columns={2} />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.visual} ${styles.visualFlip}`}>
          <Reveal className={styles.visualCopy}>
            <h2 className="displayM">One conversion, then it is dollars.</h2>
            <p>
              Topping up shows the rate, the fee position and the dollar amount
              the card will actually receive before you confirm — the same
              contract as every other conversion on the account.
            </p>
            <p>
              Both legs are written to your history: the crypto that left, and
              the USD that landed on the card.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <DataPanel
              title="Fund the card"
              meta="USDT → USD"
              rows={[
                {
                  label: "You convert",
                  value: "200.00",
                  valueSub: "USDT",
                  emphasis: true,
                },
                { label: "Rate", value: "1.000 USDT / USD", tone: "muted" },
                { label: "Fee", value: "Shown before confirm", tone: "muted" },
                {
                  label: "Card receives",
                  value: "$ 199.40",
                  tone: "accent",
                  emphasis: true,
                },
                { label: "New card balance", value: "$ 511.80" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* Freeze / unfreeze, shown rather than described. */}
      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="Controls"
              wide
              title="Freeze it yourself, in one tap."
              lead="A card you cannot stop is a card you cannot trust. Freezing is a switch on your own screen, not a phone call during business hours."
            />
          </Reveal>

          <Reveal delay={70}>
            <div className={card.states}>
              <VirtualCard label="Active — authorisations go through" />
              <VirtualCard frozen label="Frozen — every authorisation declined" />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/dollar-card" />
      </div>

      <CalloutCTA
        title="Stop getting declined abroad."
        body="The dollar card is the product people ask about first. Tell us what you need to pay for in dollars and we will come back to you by email."
      />
    </>
  );
}
