import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    // module.css로 스타일 주는 방법
    // <nav className={styles.nav}>
    //   <Link href="/" className={`${styles.link} ${router.pathname === "/" ? styles.active : ''}`} >
    //     Home
    //   </Link>
    //   <Link
    //     href="/about"
    //     className={[styles.link, router.pathname === "/about" ? styles.active : ''].join(" ")}
    //   >
    //     About
    //   </Link>
    // </nav>

    // jsx style로 스타일 주는 방법
    <nav>
      <img src="/next.svg" alt="logo" />
      <Link href="/" legacyBehavior>
        <span className={`link ${router.pathname === "/" ? "active" : ""}`}>
          Home
        </span>
      </Link>
      <Link href="/about" legacyBehavior>
        <span
          className={`link ${router.pathname === "/about" ? "active" : ""}`}
        >
          About
        </span>
      </Link>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
