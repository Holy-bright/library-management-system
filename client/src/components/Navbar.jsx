import { Link, NavLink, useNavigate } from "react-router-dom";
import { useReadingList } from "../context/ReadingListContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:text-slate-900"
  }`;

export default function Navbar() {
  const { readingList } = useReadingList();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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

        <NavLink to="/book-space" className={linkClass}>
          Book a space
        </NavLink>

        {isLoggedIn ? (
          <>
            <span className="px-2 text-sm text-slate-600">Hi, {user?.name}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={linkClass}>
              Log in
            </NavLink>
            <NavLink to="/register" className={linkClass}>
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
