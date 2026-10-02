/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Miri',
    description: 'Miris workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://MiriamMarxCC.github.io/kasm-workspaces/',
    contactUrl: 'https://foo.bar',
  },
  reactStrictMode: true,
  basePath: '/kasm-workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
