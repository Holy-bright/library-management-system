import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import GenreFilter from "../components/GenreFilter.jsx";
import SortControl from "../components/SortControl.jsx";
import BookGrid from "../components/BookGrid.jsx";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [genreId, setGenreId] = useState("");
  const [sortBy, setSortBy] = useState("title");

  return (
    <section>
      <h1 className="text-2xl font-bold text-slate-900">Browse the catalog</h1>
      <p className="mt-1 text-slate-600">
        Search by title or author, or narrow the list by genre.
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <SearchBar onSearch={setSearch} />
        <GenreFilter value={genreId} onChange={setGenreId} />
        <SortControl value={sortBy} onChange={setSortBy} />
      </div>

      <BookGrid genreId={genreId} search={search} sortBy={sortBy} />
    </section>
  );
}
