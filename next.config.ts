
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
