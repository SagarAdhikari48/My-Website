import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
