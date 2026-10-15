import type { IconName } from "@/components/Icons";

export type ProductRoute = {
  href: string;
  /** Short nav label. */
  label: string;
  /** Full page title. */
  title: string;
  /** Glyph used in the header dropdown. */
  icon: IconName;
  /** Four-to-six words for the header dropdown. */
  navNote: string;
  /** One line, used on the home list and in meta descriptions. */
  summary: string;
  /** Right-hand label on the home list rows. */
  datum: string;
};

/**
 * The six feature areas of the product, one page each.
 * Order here drives the home list, the header nav and the sitemap.
 */
export const products: ProductRoute[] = [
  {
    href: "/wallet",
    label: "Wallet",
    title: "Wallet",
    icon: "wallet",
    navNote: "Naira and crypto, one statement",
    summary:
      "A naira balance and a multi-chain crypto balance on the same statement, with QR and instant internal transfers.",
    datum: "NGN + multi-chain",
  },
  {
    href: "/crypto",
    label: "Crypto",
    title: "Crypto Trading",
    icon: "convert",
    navNote: "Buy, sell, send and convert",
    summary:
      "Buy, sell, send, receive and convert — then move the value to naira, a bill or the card.",
    datum: "5 actions",
  },
  {
    href: "/gift-cards",
    label: "Gift Cards",
    title: "Gift Card Marketplace",
    icon: "gift",
    navNote: "Priced before you commit",
    summary:
      "Buy digital cards instantly. Sell yours against a rate the valuation engine shows before you commit.",
    datum: "Priced upfront",
  },
  {
    href: "/bills",
    label: "Bills",
    title: "Bill Payments",
    icon: "power",
    navNote: "Airtime, data, power, TV, internet",
    summary:
      "Airtime, data, electricity, cable TV and internet — settled from whichever balance you are holding.",
    datum: "5 categories",
  },
  {
    href: "/banking",
    label: "Banking",
    title: "Fiat Banking Layer",
    icon: "bank",
    navNote: "Bank transfer in and out",
    summary:
      "Bank transfer in, bank withdrawal out. The rail that connects every other product to naira.",
    datum: "In / out",
  },
  {
    href: "/dollar-card",
    label: "Dollar Card",
    title: "Monixa Dollar Card",
    icon: "card",
    navNote: "Virtual USD card for global spend",
    summary:
      "A virtual USD card funded by converting crypto you already hold, for payments a naira card declines.",
    datum: "Virtual USD",
  },
];

export const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Flat list used by the header and the sitemap. */
export const allRoutes = [
  { href: "/", label: "Home" },
  ...products.map(({ href, label }) => ({ href, label })),
  ...companyLinks,
];
