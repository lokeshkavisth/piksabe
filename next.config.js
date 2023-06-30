/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
        port: "",
        pathname: "./src/assets/**",
      },
    ],
  },
  basePath: "/piksabe",
  assetPrefix: "/piksabe/",
};
