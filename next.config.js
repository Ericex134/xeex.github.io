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
};

module.exports = nextConfig;
