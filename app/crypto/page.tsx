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
  title: "Crypto Trading",
  description:
    "Buy, sell, send, receive and convert crypto on the balance you already hold — with the rate quoted before you confirm and settlement into naira, a bill or the dollar card.",
};

const FEATURES: Feature[] = [
  {
    icon: "buy",
    title: "Buy crypto",
    body: "Fund from your naira balance and take delivery into the same wallet you already hold everything else in.",
  },
  {
    icon: "sell",
    title: "Sell crypto",
    body: "Sell into naira at a quoted rate. The proceeds land in your fiat balance, ready to pay a bill without another hop.",
  },
  {
    icon: "send",
    title: "Send",
    body: "Send on-chain to an external address, or instantly to another Monixa account with no network fee at all.",
  },
  {
    icon: "receive",
    title: "Receive",
    body: "A receiving address per supported chain, plus a QR code, so an incoming transfer does not depend on retyping anything.",
  },
  {
    icon: "convert",
    title: "Convert",
    body: "Swap between supported assets, or into naira, from one screen — with the rate and the amount you will receive shown before you commit.",
  },
  {
    icon: "inOut",
    title: "Deposit and withdraw",
    body: "Bring crypto in from an external wallet and move it back out again. Every leg is written to your unified history.",
  },
];

const DESTINATIONS: Tile[] = [
  { icon: "naira", label: "Naira wallet", note: "Settle into fiat and hold it." },
  { icon: "power", label: "A bill payment", note: "Airtime, data, power, TV, internet." },
  { icon: "card", label: "Dollar card", note: "Fund a virtual USD card to spend." },
  { icon: "bank", label: "Your bank", note: "Withdraw naira to your account." },
];

export default function CryptoPage() {
  return (
    <>
      <PageHero
        kicker="Crypto trading"
        title={
          <>
            Buy it, sell it,
            <br />
            move it, <span className="em">convert it</span>.
          </>
        }
        lead="Five actions on the balance you already hold. Each one shows the rate and the amount you will receive before you confirm, not after it has already happened."
        specs={[
          { term: "Actions", value: "5" },
          { term: "Networks", value: "Multi-chain" },
          { term: "Quote", value: "Before confirm" },
          { term: "Settles into", value: "NGN, bill or card" },
          { term: "Internal send", value: "No network fee" },
        ]}
      />

      <section className="band">
        <div className={`shell pad ${styles.split}`}>
          <Reveal>
            <SectionHead
              kicker="Capabilities"
              title="Everything you can do with a balance."
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
            <h2 className="displayM">
              The number you see is the number you get.
            </h2>
            <p>
              Conversion is where most crypto-to-naira journeys lose people: the
              rate is quoted vaguely, the fee appears at the end, and settlement
              takes long enough that the price has moved by the time it lands.
            </p>
            <p>
              Monixa shows the rate, the fee and the receive amount on the same
              screen as the confirm button — and then settles into a balance you
              can spend immediately.
            </p>
            <div className={styles.note}>
              <span className={`mono ${styles.noteLabel}`}>Why it matters</span>
              <p className={styles.noteText}>
                Section 2 names slow crypto-to-fiat conversion as a core
                friction. This screen is the answer to it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <DataPanel
              title="Convert"
              meta="USDT → NGN"
              rows={[
                {
                  label: "You send",
                  value: "1,000.00",
                  valueSub: "USDT",
                  emphasis: true,
                },
                { label: "Rate", value: "₦ 1,598.40 / USDT", tone: "muted" },
                { label: "Network", sub: "Internal conversion", value: "None", tone: "muted" },
                { label: "Fee", value: "Shown before confirm", tone: "muted" },
                {
                  label: "You receive",
                  value: "₦ 1,598,400.00",
                  tone: "accent",
                  emphasis: true,
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className={`shell pad ${styles.stack}`}>
          <Reveal>
            <SectionHead
              kicker="Settlement"
              wide
              title="Where the value can go next."
              lead="Converting is not the end of the journey. Because the other five products sit on the same account, the proceeds are already where they need to be."
            />
          </Reveal>
          <Reveal delay={70}>
            <Matrix items={DESTINATIONS} min={210} />
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <ProductPager current="/crypto" />
      </div>

      <CalloutCTA
        title="Trade where the money already lives."
        body="Tell us which pairs and chains you would use most and we will factor it into what we build."
      />
    </>
  );
}
