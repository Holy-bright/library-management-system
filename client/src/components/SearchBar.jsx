import { useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <input
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search by title or author"
      aria-label="Search books by title or author"
      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 sm:flex-1"
    />
  );
}
