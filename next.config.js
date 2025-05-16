/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 启用静态HTML导出
  // 如果您的GitHub Pages是项目页面（例如username.github.io/chen），
  // 则需要设置basePath和assetPrefix
  // basePath: '/chen',
  // assetPrefix: '/chen',
  images: {
    unoptimized: true, // 为静态导出启用图片
  },
  // 禁用服务端组件以确保能完全静态导出
  experimental: {
    appDir: true
  },
};

module.exports = nextConfig; 