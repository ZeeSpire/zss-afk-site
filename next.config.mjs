/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Optional: Enforces best practices in development
    experimental: {
      scrollRestoration: true,  // Optional: Restores scroll position after navigating back
    },
    // Disable prefetching across all pages
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,  // 25 seconds for inactive page data in memory
      pagesBufferLength: 2,  // Number of pages to keep in buffer
    },
    prefetchOnHover: false,  // Disable prefetching on hover globally
  };
  
  export default nextConfig;