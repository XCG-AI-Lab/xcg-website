import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Preserve legacy WordPress paths from the old site
      { source: "/", destination: "/en", permanent: false },
      { source: "/en/about-us", destination: "/en/about", permanent: true },
      { source: "/en/about-us/:path*", destination: "/en/about", permanent: true },
      { source: "/en/our-services", destination: "/en/services", permanent: true },
      { source: "/en/contact-us", destination: "/en/contact", permanent: true },
      { source: "/zh/about-us", destination: "/zh/about", permanent: true },
      { source: "/zh/our-services", destination: "/zh/services", permanent: true },
      { source: "/zh/contact-us", destination: "/zh/contact", permanent: true },
    ];
  },
};

export default nextConfig;
