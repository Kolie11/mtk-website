import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product images still hosted on the existing shops (babybeat / current website).
    remotePatterns: [
      { protocol: "https", hostname: "shop2.babybeat.de" },
      { protocol: "https", hostname: "www.medizintechnik-kaasen.de" },
    ],
  },
};

export default nextConfig;
