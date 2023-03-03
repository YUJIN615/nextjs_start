/** @type {import('next').NextConfig} */

// .env 파일에서 키를 관리한다.
// .env 파일은 꼭 gitignore에 포함시켜서 commit 되지 않게 해야 한다.
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: false,
  // source로 접근했을 때 destination으로 redirect 하게 해준다.
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부
      },
      {
        // pattern matching도 지원한다.
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false,
      },
      {
        // *를 붙여주면 모든 경로에 대해 이동한다.
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ]
  },
  // rewrites는 유저를 redirect 시키지만 url은 변하지 않는다.
  // source를 호출했을 때 destination이 실행되고 request URL에는 source가 보여지게 한다.
  async rewrites() {
    return [
      {
        source: "/api/movies/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
