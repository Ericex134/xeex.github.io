/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/xeex.github.io",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable Sentry during static export
  sentry: {
    disableServerWebpackPlugin: true,
    disableClientWebpackPlugin: true,
  },
};

module.exports = nextConfig;
