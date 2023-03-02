import Head from "next/head"; // next.js에 포함된 라이브러리.

export default function Seo({ title }) {
  return (
    <>
      {/* Head 컴포넌트 안에 들어간 모든 것들이 html의 head 안에 보여진다. */}
      <Head>
        <title>{title} | Next Movie</title>
      </Head>
    </>
  );
}
