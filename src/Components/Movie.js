import { Link } from "react-router-dom";
import style from "./Movie.module.css";

export default function Movie({ movies }) {
  return (
    <div className={style["item-wrap"]}>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className={style["item"]}>
            <Link to={`/detail/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{`${movie.summary.slice(0, 250)}...`}</p>
            <p>genres</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
