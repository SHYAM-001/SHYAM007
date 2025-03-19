import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"; // Detects production environment dynamically
const repoName = "SHYAM007"; // 🔹 Replace with your actual GitHub repository name

const nextConfig: NextConfig = {
  output: "export", // Required for static exports
  basePath: isProd ? `/${repoName}` : "", // Sets the correct base path for GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : "", // Ensures assets load correctly
  images: {
    unoptimized: true, // Disables Next.js image optimization (GitHub Pages doesn't support it)
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Ignores ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
};

export default nextConfig;
