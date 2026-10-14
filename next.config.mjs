import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* There is an unrelated lockfile further up the drive; pin tracing here so
     Next does not infer the wrong workspace root. */
  outputFileTracingRoot: projectRoot,
  /* Lets a verification build run alongside a live `next dev` without the two
     processes fighting over the same output directory. */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: { optimizePackageImports: [] },
};

export default nextConfig;
