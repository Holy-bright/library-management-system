import { Link } from "react-router-dom";
import { useReadingList } from "../context/ReadingListContext.jsx";

export default function ReadingListPage() {
  const { readingList, removeBook, clearList } = useReadingList();

  const handleClear = () => {
    if (window.confirm("Remove every book from your reading list?")) {
      clearList();
    }
  };

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">My reading list</h1>
        {readingList.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="rounded-md border border-red-300 bg-white px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
          >
            Clear list
          </button>
        )}
      </div>

      {readingList.length === 0 ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
          <p>Your reading list is empty.</p>
          <Link to="/" className="mt-2 inline-block text-blue-700 hover:underline">
            Browse the catalog
          </Link>
        </div>
      ) : (
        <ul className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {readingList.map((book) => (
            <li key={book.id} className="flex flex-wrap items-center justify-between gap-4 p-4">
              <div>
                <Link
                  to={`/books/${book.id}`}
                  className="font-semibold text-slate-900 hover:underline"
                >
                  {book.title}
                </Link>
                <p className="text-sm text-slate-600">
                  by {book.author}
                  {book.genre ? `, ${book.genre}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeBook(book.id)}
                className="rounded-md border border-slate-300 bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-50"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
