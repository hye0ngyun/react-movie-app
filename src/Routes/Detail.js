import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";

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

  return <>{loading ? "Loading..." : <MovieDetail movie={movie} />}</>;
}
