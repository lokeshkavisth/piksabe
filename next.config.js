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
  generateBuildId: async () => {
    // This is required to prevent the same build ID being used across deployments
    return "build-" + new Date().getTime();
  },
  trailingSlash: true,
  generateStaticParams: function () {
    return {
      "/": { page: "/" },
    };
  },
};
