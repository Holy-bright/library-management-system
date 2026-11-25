import { useReadingList } from "../context/ReadingListContext.jsx";

export default function ReadingListButton({ book }) {
  const { isInList, addBook, removeBook } = useReadingList();
  const saved = isInList(book.id);

  return (
    <button
      type="button"
      onClick={() => (saved ? removeBook(book.id) : addBook(book))}
      aria-pressed={saved}
      className={`w-full rounded-md px-3 py-2 text-sm font-medium transition ${
        saved
          ? "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
          : "bg-blue-700 text-white hover:bg-blue-800"
      }`}
    >
      {saved ? "Remove from reading list" : "Add to reading list"}
    </button>
  );
}
