/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'www.microburbs.com.au']
  },
  webpack: (config) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    return config;
  },
};
export default nextConfig;
