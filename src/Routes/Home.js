import { useState, useEffect } from "react";
import Movie from "../Components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=year"
      )
    ).json();
    const movies = json.data.movies;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <>{loading ? "Loading..." : <Movie movies={movies} />}</>;
}
