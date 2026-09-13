/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',

  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio/' : '',

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig