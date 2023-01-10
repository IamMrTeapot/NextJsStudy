/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/contact',
        destination: '/',
        permanent: false
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blog/:id',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
