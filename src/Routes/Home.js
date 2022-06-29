import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Components/Movie";
import Pagination from "../Components/Pagination";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [limit, setLimit] = useState(20);
  const { id } = useParams();
  const getMovies = async () => {
    // 왜 setPage(id);를 하고 url page부분에 page를 넣으면 한 스텝 늦게 값이 적용되는지???
    // setPage(id);

    // 페이지 변경 시 fetch 전까지 loading을 보여주기 위해
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=year&page=${id}&limit=${limit}`
      )
    ).json();
    const movies = json.data.movies;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <>
      {loading ? "Loading..." : <Movie movies={movies} />}
      <Pagination page={page} />
    </>
  );
}
