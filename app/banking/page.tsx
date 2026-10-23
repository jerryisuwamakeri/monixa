import type { Metadata } from "next";
import CalloutCTA from "@/components/CalloutCTA";
import DataPanel from "@/components/DataPanel";
import FeatureLedger, { type Feature } from "@/components/FeatureLedger";
import Matrix, { type Tile } from "@/components/Matrix";
import PageHero from "@/components/PageHero";
import ProductPager from "@/components/ProductPager";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import styles from "../product.module.css";

export const metadata: Metadata = {
  title: "Fiat Banking Layer",
  description:
    "Deposit naira by bank transfer and withdraw to your bank account. The fiat rail that every other Monixa product settles through.",
};

const FEATURES: Feature[] = [
  {
    icon: "depositIn",
    title: "Deposit via bank transfer",
    body: "Send naira from any Nigerian bank to your Monixa details. The balance moves against your wallet, not a pending holding page.",
  },
  {
    icon: "withdrawOut",
    title: "Withdraw to a bank account",
    body: "Move naira out to an account you have saved. The request, its status and its reference all sit in your transaction history.",
  },
  {
    icon: "naira",
    title: "One naira balance",
    body: "Deposits, gift card payouts, crypto conversions and bill payments all arrive in and leave from the same place.",
  },
  {
    icon: "ledger",
    title: "A record for every leg",
    body: "Each deposit and withdrawal is written to the unified statement with its reference, so reconciliation is a filter rather than an email thread.",
  },
];

const FEEDS: Tile[] = [
  { icon: "power", label: "Bill payments", note: "Airtime, data, power, TV, internet." },
  { icon: "convert", label: "Crypto trading", note: "Buy orders funded in naira." },
  { icon: "gift", label: "Gift cards", note: "Buy from naira, sell into naira." },
  { icon: "card", label: "Dollar card", note: "Fund a USD balance to spend." },
];

export default function BankingPage() {
  return (
    <>
      <PageHero
        kicker="Fiat banking layer"
        title={
          <>
            The rail under
            <br />
            <span className="em">everything else</span>.
          </>
        }
        lead="Naira moves in by bank transfer and out to your bank account. It is the least glamorous product on the list and the one every other product leans on."
        specs={[
          { term: "Deposit", value: "Bank transfer" },
          { term: "Withdraw", value: "To bank account" },
          { term: "Currency", value: "NGN" },
          { term: "Record", value: "With reference" },
          { term: "Role", value: "Rail for all six" },
        ]}
      />

      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="Capabilities"
              title="In, out, and on the record."
              tight
            />
          </Reveal>
          <Reveal delay={80} className={styles.splitBody}>
            <FeatureLedger items={FEATURES} columns={2} />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="Both legs"
              wide
              title="Money in. Money out."
              lead="Two flows, the same ledger. Each one carries a reference you can quote, which is the part that usually goes missing."
            />
          </Reveal>

          <Reveal delay={70}>
            <div className={styles.pair}>
              <DataPanel
                title="Money in"
                meta="Bank transfer"
                rows={[
                  { label: "From", sub: "Your bank", value: "NUBAN transfer" },
                  { label: "Reference", value: "SNW-4F82-11D", tone: "muted" },
                  { label: "Amount", value: "₦ 500,000.00", emphasis: true },
                  { label: "Credited to", value: "Naira wallet", tone: "accent" },
                ]}
              />
              <DataPanel
                title="Money out"
                meta="Withdrawal"
                rows={[
                  { label: "To", sub: "Saved account", value: "•••• 8830" },
                  { label: "Reference", value: "SNW-9A17-07C", tone: "muted" },
                  { label: "Amount", value: "₦ 250,000.00", emphasis: true },
                  { label: "Debited from", value: "Naira wallet", tone: "accent" },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="What it feeds"
              wide
              title="Four products sit on top of this one."
              lead="Build the fiat rail properly and the rest of the super app has somewhere to settle. Build it badly and every other product inherits the problem."
            />
          </Reveal>
          <Reveal delay={70}>
            <Matrix items={FEEDS} min={210} />
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/banking" />
      </div>

      <CalloutCTA
        title="The boring part, done carefully."
        body="If you have been burned by a deposit that vanished into a pending state, tell us where it went wrong. That is the brief for this rail."
      />
    </>
  );
}
