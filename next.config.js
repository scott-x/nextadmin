/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'statics.scott-xiong.com',
                port: '',
                pathname: '/docusaurus/**',
            },
        ],
    },
}

module.exports = nextConfig
