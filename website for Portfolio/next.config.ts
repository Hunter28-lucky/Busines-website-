import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // reactCompiler is now a top-level option in newer Next.js versions, 
    // but if the types don't support it yet, we might need to check the version.
    // However, the error message said it moved to `reactCompiler`.
    // Let's try putting it at the top level as the error suggested.
  },
  reactCompiler: true,
};

export default nextConfig;
