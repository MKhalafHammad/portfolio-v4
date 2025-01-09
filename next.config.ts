import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for Cloudflare Pages
    domains: [
      // Add your image domains here
    ],
  },
  // Enable Cloudflare specific optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  }
};

export default nextConfig;
