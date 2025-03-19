import type { NextConfig } from "next";

const isProd = true;
const repoName = "SHYAM007"; // 🔹 Replace with your actual GitHub repository name

const nextConfig: NextConfig = {
  output: "export", // Required for static exports
  basePath: isProd ? `/${repoName}` : "", // Sets the correct base path for GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : "", // Ensures assets load correctly
  images: {
    unoptimized: true, // Disables image optimization since GitHub Pages doesn't support it
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Temporarily disable ESLint errors in production (remove this after fixing)
  },
};

export default nextConfig;
