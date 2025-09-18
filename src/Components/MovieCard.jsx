import { useCallback, useState, memo } from "react";
import FavoriteButton from "./FavoriteButton";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import { MOVIES } from "../data/movies.data";
function MovieCard({ image, rating, trailerYouTubeId }) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);

  const trailer = MOVIES.forEach((movie) => {
    return movie.trailerYouTubeId;
  });
  const si = MOVIES.forEach((movie) => {
    return movie.si;
  });
  console.log(MOVIES[0].si);
  const openTrailer = useCallback(() => {
    setIsOpenTrailer(true);
  });
  return (
    <div className="relative w-[200px] rounded-2xl overflow-hidden bg-netural-900 shadow-lg">
      {isOpenTrailer && (
        <Modal onClose={() => setIsOpenTrailer(false)}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ca3mUSDJlgM?si=bIGZPplq6zW5lGuZ&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal>
      )}
      <img
        src={image}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-2 right-2 z-10 flex gap-3">
        <FavoriteButton />
        <button onClick={openTrailer}>🎬</button>
        <Link to={`/movie/${trailerYouTubeId}`}>📎</Link>
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 w-full to-transparent text-white/50 font-semibold flex justify-center align-middle">
        IMDb rating : {rating}
      </div>
    </div>
  );
}

export default memo(MovieCard);
