import { Link, NavLink } from "react-router-dom";
import { useReadingList } from "../context/ReadingListContext.jsx";

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:text-slate-900"
  }`;

export default function Navbar() {
  const { readingList } = useReadingList();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3">
        <Link to="/" className="mr-auto text-xl font-bold text-slate-800">
          Library Catalog
        </Link>

        <NavLink to="/" end className={linkClass}>
          Catalog
        </NavLink>

        <NavLink to="/reading-list" className={linkClass}>
          Reading list
          <span
            className="ml-2 rounded-full bg-blue-700 px-2 py-0.5 text-xs font-semibold text-white"
            aria-label={`${readingList.length} books in your reading list`}
          >
            {readingList.length}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}
