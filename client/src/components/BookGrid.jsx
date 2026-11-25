import { useEffect, useState } from "react";
import api from "../api.js";
import BookCard from "./BookCard.jsx";

const PAGE_LIMIT = 50;

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-lg border border-slate-200 bg-white p-4">
      <div className="h-3 w-1/3 rounded bg-slate-200" />
      <div className="mt-3 h-5 w-3/4 rounded bg-slate-200" />
      <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
      <div className="mt-4 h-4 w-2/5 rounded bg-slate-200" />
    </div>
  );
}

export default function BookGrid({ genreId, search, sortBy }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");

    api
      .get("/books", {
        params: {
          genreId: genreId || undefined,
          search: search || undefined,
          limit: PAGE_LIMIT,
        },
        signal: controller.signal,
      })
      .then((res) => setBooks(res.data.data))
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError("Could not load books. Check that the API is running, then try again.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [genreId, search, reloadCount]);

  if (loading) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
        <p>{error}</p>
        <button
          type="button"
          onClick={() => setReloadCount((count) => count + 1)}
          className="mt-3 rounded-md bg-red-700 px-3 py-1 text-sm font-medium text-white hover:bg-red-800"
        >
          Try again
        </button>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
        No books match your search. Try another word or choose All genres.
      </div>
    );
  }

  const sortedBooks = [...books].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <>
      <p className="mt-6 text-sm text-slate-600">
        Showing {sortedBooks.length} {sortedBooks.length === 1 ? "book" : "books"}
      </p>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}
