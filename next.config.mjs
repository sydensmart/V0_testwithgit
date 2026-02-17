/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // GitHub Pages를 위한 정적 사이트 생성
  basePath: '/V0_testwithgit',  // GitHub Pages basePath for repository
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
