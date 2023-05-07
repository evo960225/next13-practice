/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material', // If @mui/icons-material is being used
  ],
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig

