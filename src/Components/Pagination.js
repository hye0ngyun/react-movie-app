import { Link, useParams } from "react-router-dom";
import style from "./Pagination.module.css";
export default function Pagination({ page }) {
  const pagination = [];
  const { id } = useParams();
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  for (let i = 1; i <= page; i++) {
    pagination.push(
      <li key={i}>
        <Link
          onClick={onClick}
          className={i === Number(id) ? style.active : ""}
          to={`/${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }
  return <ul className={style["pagination"]}>{pagination}</ul>;
}
