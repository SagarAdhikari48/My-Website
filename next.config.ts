import type { NextConfig } from "next";

// Configuration for static export deployment to Cloudflare Pages
const nextConfig: NextConfig = {
  output: 'export',        // Generate static files for deployment
  trailingSlash: true,     // Add trailing slashes to URLs
  images: {
    unoptimized: true,     // Disable image optimization for static export
  },
};

export default nextConfig;