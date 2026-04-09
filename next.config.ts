import type { NextConfig } from "next";

// Configuration for static export with SEO optimization
const nextConfig: NextConfig = {
  output: 'export',        // Generate static files for deployment
  trailingSlash: true,     // Add trailing slashes to URLs for better compatibility
  images: {
    unoptimized: true,     // Disable image optimization for static export
  },
  // Ensure proper static generation
  distDir: 'out',
  // SEO and Performance optimizations
  compress: true,
  poweredByHeader: false,  
  generateEtags: false,
};

export default nextConfig;