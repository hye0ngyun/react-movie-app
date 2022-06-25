import { Link } from "react-router-dom";
import style from "./MovieDetail.module.css";
export default function MovieDetail({ movie }) {
  return (
    <div className={style["item-wrap"]}>
      <Link to={"/"}>back</Link>
      <div className={style["item"]}>
        <h3>Title: {movie.title}</h3>
        <img src={movie.medium_cover_image} alt={movie.id} />
        <p>Summary: {movie.description_intro}</p>
        <p>Rating: {movie.rating}</p>
        <p>Year: {movie.year}</p>
        <p>genres</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
