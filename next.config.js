/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/personal-page/",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
