import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
