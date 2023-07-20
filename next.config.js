/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  nextConfig,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["pixabay.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pixabay.com",
        pathname: "./src/assets/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_PIKSABE_API_KEY: process.env.NEXT_PUBLIC_PIKSABE_API_KEY,
  },
};
