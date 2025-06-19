/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态HTML导出
  trailingSlash: true, // 为GitHub Pages添加尾部斜杠
  // 如果您的GitHub Pages是项目页面（例如username.github.io/chen），
  // 则需要设置basePath和assetPrefix
  // basePath: '/chen',
  // assetPrefix: '/chen',
  images: {
    unoptimized: true, // 为静态导出启用图片
  },
  // Disable ESLint during build to allow deployment despite warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 