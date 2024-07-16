/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add the image configuration here
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;