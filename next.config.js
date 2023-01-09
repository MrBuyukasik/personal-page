/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {},
  assetPrefix: isProd ? "https://canbuyukasik.com" : undefined,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
