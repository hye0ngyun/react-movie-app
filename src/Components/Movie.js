import { Link } from "react-router-dom";

export default function Movie({ movies }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <p>{movie.summary}</p>
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
