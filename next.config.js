/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {},
  assetPrefix: isProd ? "/personal-page/" : "",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
