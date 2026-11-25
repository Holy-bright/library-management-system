import { Link } from "react-router-dom";
import ReadingListButton from "./ReadingListButton.jsx";

export default function BookCard({ book }) {
  const available = book.availableCopies > 0;

  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {book.genre?.name}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">
        <Link to={`/books/${book.id}`} className="hover:underline">
          {book.title}
        </Link>
      </h3>
      <p className="text-sm text-slate-600">by {book.author}</p>
      <p
        className={`mt-3 text-sm font-medium ${
          available ? "text-green-700" : "text-red-700"
        }`}
      >
        {available
          ? `${book.availableCopies} of ${book.totalCopies} available`
          : "All copies on loan"}
      </p>
      <div className="mt-auto pt-4">
        <ReadingListButton book={book} />
      </div>
    </div>
  );
}
