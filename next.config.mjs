/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.API_URL || "https://localhost:4000",
  },
  images: {
    domains: ["localhost:3000", "localhost", "avatar.iran.liara.run"],
    unoptimized: true,
  }
};

export default nextConfig;