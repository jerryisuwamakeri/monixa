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
  title: "Wallet",
  description:
    "A naira fiat wallet and a multi-chain crypto wallet that settle into one transaction history, with instant internal transfers and QR support.",
};

const FEATURES: Feature[] = [
  {
    icon: "naira",
    title: "NGN fiat wallet",
    body: "Hold naira directly. Fund it by bank transfer and spend it on a bill without converting anything first.",
  },
  {
    icon: "chain",
    title: "Multi-chain crypto wallet",
    body: "One wallet across supported chains, so the same asset on a different network is not a different account to keep track of.",
  },
  {
    icon: "statement",
    title: "Unified transaction history",
    body: "Fiat and crypto on one ledger, filterable and exportable, with the rate recorded at the moment each entry was written.",
  },
  {
    icon: "transfer",
    title: "Internal transfers",
    body: "Move value to another Monixa account instantly and without a network fee, because nothing has to touch a chain to get there.",
  },
  {
    icon: "qr",
    title: "QR code support",
    body: "Show a code to be paid, scan one to pay. Long addresses stop being something you retype and hope.",
  },
];

const RAILS: Tile[] = [
  { icon: "qr", label: "Scan to pay", note: "Show or scan a code in person." },
  { icon: "at", label: "Monixa handle", note: "Send to a username, not an address." },
  { icon: "address", label: "On-chain address", note: "Receive from any external wallet." },
  { icon: "bank", label: "Bank transfer", note: "Naira in and out of your account." },
];

export default function WalletPage() {
  return (
    <>
      <PageHero
        kicker="Wallet"
        title={
          <>
            Two wallets,
            <br />
            <span className="em">one statement</span>.
          </>
        }
        lead="A naira balance and a multi-chain crypto balance that write to the same history — so you stop reconciling your own money between four different apps."
        specs={[
          { term: "Fiat", value: "NGN" },
          { term: "Crypto", value: "Multi-chain" },
          { term: "Transfers", value: "Internal, instant" },
          { term: "Receive", value: "QR or address" },
          { term: "History", value: "Unified ledger" },
        ]}
      />

      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="Capabilities"
              title="What the wallet holds."
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
              title="Transaction history"
              meta="Last 5 entries"
              rows={[
                {
                  label: "Gift card sale",
                  sub: "iTunes US · $100",
                  value: "+ ₦ 142,000.00",
                  tone: "positive",
                },
                {
                  label: "Convert",
                  sub: "USDT → NGN",
                  value: "+ ₦ 1,598,400.00",
                  tone: "positive",
                },
                {
                  label: "Airtime",
                  sub: "MTN · 0803 ••• ••21",
                  value: "− ₦ 2,000.00",
                },
                {
                  label: "Internal transfer",
                  sub: "To @adaeze",
                  value: "− ₦ 50,000.00",
                },
                {
                  label: "Card funding",
                  sub: "Monixa dollar card",
                  value: "− ₦ 185,000.00",
                },
              ]}
            />
          </Reveal>

          <Reveal delay={90} className={styles.visualCopy}>
            <h2 className="displayM">
              A gift card sale and a chain swap land on the same page.
            </h2>
            <p>
              Most apps give you a fiat history and a crypto history and leave
              you to join them up. Monixa writes every leg to one ledger — the
              sale, the conversion, the bill, the card top-up — with the rate
              that applied when it happened.
            </p>
            <div className={styles.note}>
              <span className={`mono ${styles.noteLabel}`}>Why it matters</span>
              <p className={styles.noteText}>
                When the record is already joined up, working out what you
                actually earned on a trade is a filter rather than a
                spreadsheet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="Rails"
              title="Four ways value moves."
            />
          </Reveal>
          <Reveal delay={70}>
            <Matrix items={RAILS} min={210} />
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/wallet" />
      </div>

      <CalloutCTA
        title="One balance sheet, from the first deposit."
        body="Tell us which balance you would move in first and we will come back to you by email."
      />
    </>
  );
}
