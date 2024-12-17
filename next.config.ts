import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [], // Remove remotePatterns if you want to use the domains property.
    domains: [], // Allow images from all domains.
    unoptimized: true, // Allow external images without restriction (optional).
  },
};

export default nextConfig;
