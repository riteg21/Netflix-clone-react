import { useParams } from "react-router-dom";
import { MOVIES } from "../data/movies.data";
import { lazy, useMemo, Suspense } from "react";

const LazyMovieComments = lazy(() => import("./MovieComments")); //lazy нужен для того чтобы подгружать компонент не сразу - а только при действительной нужде в этом компоненте

export function MovieDetails() {
  const { id } = useParams();

  const movie = MOVIES.find((movie) => movie.trailerYouTubeId === id);

  if (!movie) return <p>Movie not found</p>;
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img
          src={movie.image}
          alt="Movie Poster"
          className="w-1xl rounded-xl shadow-lg object-cover"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">{movie.name}</h1>
          <p className="text-sm text-gray-400">IMDb: {movie.rating}</p>
          <p className="text-gray-300 text-sm">
            Это краткое описание фильма. Тудым-сюдым
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyMovieComments />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
// саспенс нужен для того чтобы пока что-то не подгрузилось он нарисовал что-то типа этого
