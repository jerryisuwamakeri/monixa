export const site = {
  name: "Monixa",
  domain: "monixa.com",
  url: "https://monixa.com",
  email: "hello@monixa.com",
  address: "Lagos, Nigeria",
  /* Store listings. Replace with the real URLs once the apps are published. */
  apps: {
    ios: "https://apps.apple.com/app/monixa",
    android: "https://play.google.com/store/apps/details?id=com.monixa",
  },
  tagline: "Naira, crypto and a dollar card. One account.",
  description:
    "Monixa is a financial platform that puts a naira wallet, multi-chain crypto, gift cards, bill payments and a virtual USD card behind one login.",
} as const;

/**
 * Social profiles. The handles below are placeholders — swap each href for
 * the real profile URL and the footer picks it up automatically.
 */
export const socials = [
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/monixa" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/monixa" },
  { name: "X", icon: "x", href: "https://x.com/monixa" },
  { name: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@monixa" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/monixa" },
] as const;
