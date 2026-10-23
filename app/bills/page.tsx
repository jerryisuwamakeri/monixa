import type { Metadata } from "next";
import CalloutCTA from "@/components/CalloutCTA";
import DataPanel from "@/components/DataPanel";
import Matrix, { type Tile } from "@/components/Matrix";
import PageHero from "@/components/PageHero";
import ProductPager from "@/components/ProductPager";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import styles from "../product.module.css";

export const metadata: Metadata = {
  title: "Bill Payments",
  description:
    "Pay airtime, data bundles, electricity, cable TV and internet subscriptions straight from your naira balance or by converting crypto at the point of payment.",
};

const BILLERS: Tile[] = [
  {
    icon: "phone",
    label: "Airtime",
    note: "Top up any number on any supported network.",
  },
  {
    icon: "data",
    label: "Data bundles",
    note: "Buy a bundle by size rather than hunting a code.",
  },
  {
    icon: "power",
    label: "Electricity",
    note: "Prepaid tokens and postpaid accounts by meter number.",
  },
  {
    icon: "tv",
    label: "Cable TV",
    note: "Renew a subscription against the smartcard on file.",
  },
  {
    icon: "internet",
    label: "Internet",
    note: "Settle a home or office broadband subscription.",
  },
];

export default function BillsPage() {
  return (
    <>
      <PageHero
        kicker="Bill payments"
        title={
          <>
            Pay the bill from
            <br />
            <span className="em">whatever you hold</span>.
          </>
        }
        lead="Five categories, settled straight from your naira balance — or by converting crypto at the moment of payment, so value on-chain can keep the lights on without a round trip through another app."
        specs={[
          { term: "Categories", value: "5" },
          { term: "Pay from", value: "NGN or crypto" },
          { term: "Receipt", value: "Instant, in-app" },
          { term: "Record", value: "Unified ledger" },
          { term: "Coverage", value: "Nigeria" },
        ]}
      />

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="Billers"
              wide
              title="What you can settle."
              lead="The five categories named in the product requirements, each wired to the same balance and the same transaction history as everything else on the account."
            />
          </Reveal>
          <Reveal delay={70}>
            <Matrix items={BILLERS} min={225} />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.visual} ${styles.visualFlip}`}>
          <Reveal className={styles.visualCopy}>
            <h2 className="displayM">
              Crypto pays the electricity bill directly.
            </h2>
            <p>
              Normally this is four steps across two apps: sell the crypto, wait
              for settlement, move naira to a bills app, then pay. Because the
              wallet, the conversion and the biller sit on one account, Monixa
              does it as one confirmation.
            </p>
            <p>
              The conversion still appears on your statement as its own leg, at
              the rate that applied — so the payment is one action but the
              record is still complete.
            </p>
            <div className={styles.note}>
              <span className={`mono ${styles.noteLabel}`}>Why it matters</span>
              <p className={styles.noteText}>
                Section 2 opens with crypto trading existing separately from
                bill payments. This is the seam being closed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <DataPanel
              title="Payment"
              meta="Electricity · prepaid"
              rows={[
                { label: "Biller", value: "Ikeja Electric" },
                { label: "Meter", sub: "Prepaid", value: "4512 8830 221" },
                { label: "Amount", value: "₦ 20,000.00", emphasis: true },
                {
                  label: "Paid from",
                  sub: "Converted at ₦ 1,598.40",
                  value: "12.51 USDT",
                  tone: "muted",
                },
                { label: "Token", value: "Issued instantly", tone: "accent" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/bills" />
      </div>

      <CalloutCTA
        title="Which bill would you move over first?"
        body="Biller coverage is the part most worth getting right. Email us the ones you pay every month."
      />
    </>
  );
}
