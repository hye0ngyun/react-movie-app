import { Link, useParams } from "react-router-dom";
import style from "./Header.module.css";
export default function Header() {
  // 현재 url에 따라서 Link에 active 클래스 추가 작업
  return (
    <nav className={style["header"]}>
      <Link to={"/"} className={""}>
        Home
      </Link>
    </nav>
  );
}
