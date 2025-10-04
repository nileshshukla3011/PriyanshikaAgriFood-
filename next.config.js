/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Server-Side Rendering for improved SEO
  // Valid values are 'standalone' or 'export', removing output for default SSR
  
  // Configure image domains if needed
  images: {
    domains: [],
  },
  
  // Redirects from old routes if needed
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;