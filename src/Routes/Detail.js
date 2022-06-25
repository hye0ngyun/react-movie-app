import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      const movieInfo = json.data.movie;
      setMovie(movieInfo);
      setLoading(false);
    })();
  }, [id]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Link to={"/"}>
            <p>back</p>
          </Link>
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
        </>
      )}
    </>
  );
}
