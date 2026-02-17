/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // GitHub Pages를 위한 정적 사이트 생성
  basePath: '/V0_testwithgit',  // GitHub Pages 리포지토리 이름으로 교체 필요 시 (예: '/repository-name')
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
