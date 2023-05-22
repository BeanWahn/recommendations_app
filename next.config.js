const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  experimental: { 
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"] 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});
