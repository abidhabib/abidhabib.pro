import type { NextConfig } from "next";

/*
 * Two build targets:
 *  - default        → `output: "standalone"` (Vercel, VPS, `npm start`)
 *  - BUILD_STATIC=1 → `output: "export"`   (GitHub Pages, emits ./out)
 */
const isPagesBuild = process.env.BUILD_STATIC === "1";

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? { output: "export" as const, images: { unoptimized: true } }
    : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
