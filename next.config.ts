import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "aips-backend.local",
        pathname: "/**",
      },
      {
        protocol: "https",
        // Using ** allows for any level of subdomains from Cloudflare tunnels
        hostname: "**.trycloudflare.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;