// 모든 페이지의 청사진을 커스텀하는 장소
// 기본으로 next.js 프레임워크에 포함되어 있다.
// next.js는 페이지가 랜더링되기 전에 _app.js를 불러온다.
// _app.js에 넣어둔 청사진을 기반으로 페이지를 부른다.
// 이 파일에는 global로 import해야 할 많은 것들이 있기 때문에 레이아웃은 일반적으로 Layout 컴포넌트로 빼서 관리한다.

import Layout from "@/components/Layout";
import "../styles/globals.css";

// 페이지의 함수들을 pageProps로 가져온다.
export default function app({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        {/* Layout에서 children에 해당하는 것이 아래 Component이다. */}
        <Component {...pageProps} />
      </Layout>
      {/* 전역에 스타일을 주려면 global을 선언한다 */}
      {/* 하지만 다른 페이지로 넘어가면 스타일이 적용되지 않는다. */}
      {/* 모든 곳에 적용하기 위해 _app.js에 스타일을 준다. */}
      <style jsx global>{`
        .link {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
