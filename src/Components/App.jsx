import { useEffect, useState, useMemo } from "react";
import MovieCard from "./MovieCard";
import { MOVIES } from "../data/movies.data";
import { useDebounce } from "../hooks/useDebounce";
import { useTheme } from "../ThemeContext";

const App = () => {
  // const { theme, toggleTheme } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const movies = MOVIES.filter((movie) =>
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <header className="mb-10 flex items-center justify-between">
        <img src="/nettt.svg" alt="Netflix" className="h-15 w-auto" />

        <div>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Search..."
            className="border border-white/15 px-2 py-1 rounded outline-0"
          />

          {/* <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition w-20"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button> */}
        </div>
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.name}
              image={movie.image}
              rating={movie.rating}
              trailerYouTubeId={movie.trailerYouTubeId}
            />
          ))
        ) : (
          <p>Movies not found</p>
        )}
      </main>
    </div>
  );
};

export default App;
