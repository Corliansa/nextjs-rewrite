/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
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
