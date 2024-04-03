/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["http://localhost:8000", "https://cdn.skypack.dev"]
  }
};

export default nextConfig;
