import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Seo from "@/components/Seo";

// API를 숨기는 이유
// 사람들이 알게 되면 남용할 수 있고, 유료 API 일 수도 있고, 사용량 제한이 있을 수도 있기 때문에
// redirect와 rewrite:  request에 mask를 씌우는 것과 같다.
// const API_KEY = "84016f6e81ea689a0ad9d6edd152ce42";

// getServerSideProps 함수에서 return된 props를 인자로 받아온다.
export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}/${title}`,
        query: {
          title: title,
        },
      },
      // 보여질 url을 마스킹 해준다.
      // `/movies/${id}`
    );
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="title">Popular Movie 20</h1>
      {!results ? (
        <strong>Loading...</strong>
      ) : (
        <ul className="container">
          {results.map((movie) => (
            <li
              key={movie.id}
              className="movie"
              onClick={() => onClick(movie.id, movie.title)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <Link
                href={{
                  pathname: `/movies/${movie.id}`,
                  query: {
                    title: movie.original_title,
                  },
                  // 보여질 url을 마스킹 해준다.
                }}
                as={`/movies/${movie.id}`}
              >
                <h4>{movie.original_title}</h4>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .title {
          text-align: center;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
          list-style: none;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 서버사이드 렌더링을 하려고 할 때 사용하는 함수
// 서버에서 받아온 데이터를 props로 내보낸다.
// getServerSideProps > 이름을 바꾸면 안된다.
// 여기서 작성하는 코드는 클라이언트에게 보이지 않는다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies/popular`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
