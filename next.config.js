/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",
  basePath: "/restaurant-gallary",
  assetPrefix: "/restaurant-gallary",
};

module.exports = nextConfig;
