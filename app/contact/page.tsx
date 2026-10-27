import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the Monixa team. Email ${site.email} and we will come back to you.`,
};

export default function ContactPage() {
  return (
    <section className="band">
      <div className="shell">
        <div className={styles.rail}>
          <span className="mono">Contact</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <h1 className={`displayL ${styles.h1}`}>
              Tell us what you&rsquo;d move into Monixa{" "}
              <span className="em">first</span>.
            </h1>

            <a href={`mailto:${site.email}`} className={styles.bigEmail}>
              <span className="num">{site.email}</span>
            </a>

            <p className={styles.where}>{site.address}</p>
          </div>

          <Reveal className={styles.formSlot}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
