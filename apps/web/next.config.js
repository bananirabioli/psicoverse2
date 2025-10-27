/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@psicoverse/ui', '@psicoverse/services', '@psicoverse/validation'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
