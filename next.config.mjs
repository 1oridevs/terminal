// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/<terminal>',
    trailingSlash: true, 
    images: {
      unoptimized: true, // Disable Next.js Image Optimization for GitHub Pages
    },
  };
  
  export default nextConfig;
  