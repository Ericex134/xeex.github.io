/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/xeex.github.io",
  assetPrefix: "/xeex.github.io",
};

module.exports = nextConfig;
