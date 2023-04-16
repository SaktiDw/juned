/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/sister/:path*',
        destination: 'http://sister.itk.ac.id/ws.php/1.0/:path*',
      }
    ]
  },
  ...nextConfig,
}
