/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*{/}?",
        destination: "https://eu.posthog.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
