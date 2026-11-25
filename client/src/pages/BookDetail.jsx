import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api.js";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setBook(null);

    api
      .get(`/books/${id}`, { signal: controller.signal })
      .then((res) => setBook(res.data))
      .catch((err) => {
        if (err.name === "CanceledError") return;
        const status = err.response?.status;
        if (status === 404) setError("This book does not exist.");
        else if (status === 400) setError("That is not a valid book id.");
        else setError("Could not load this book. Check that the API is running.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [id]);

  return (
    <section>
      <Link to="/" className="text-sm text-blue-700 hover:underline">
        Back to the catalog
      </Link>

      {loading && (
        <div className="mt-4 animate-pulse rounded-lg border border-slate-200 bg-white p-6">
          <div className="h-7 w-1/2 rounded bg-slate-200" />
          <div className="mt-3 h-4 w-1/3 rounded bg-slate-200" />
          <div className="mt-6 h-4 w-2/3 rounded bg-slate-200" />
        </div>
      )}

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          {error}
        </div>
      )}

      {book && (
        <article className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {book.genre?.name}
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">{book.title}</h1>
          <p className="text-slate-600">by {book.author}</p>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-slate-500">ISBN</dt>
              <dd className="font-medium text-slate-900">{book.isbn}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Copies owned</dt>
              <dd className="font-medium text-slate-900">{book.totalCopies}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">On the shelf now</dt>
              <dd
                className={`font-medium ${
                  book.availableCopies > 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {book.availableCopies > 0
                  ? `${book.availableCopies} available`
                  : "All copies on loan"}
              </dd>
            </div>
          </dl>
        </article>
      )}
    </section>
  );
}
