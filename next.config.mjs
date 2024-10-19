// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static export
    basePath: '/terminal',  // Your GitHub repo name, exactly as it is: /terminal
    trailingSlash: true,  // For compatibility with GitHub Pages
    images: {
      unoptimized: true,  // Disable image optimization since GitHub Pages doesn't support it
    },
  };
  
  export default nextConfig;
  