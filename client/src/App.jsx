import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookDetail from "./pages/BookDetail.jsx";

function NotFound() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
      <h1 className="text-xl font-semibold text-slate-900">Page not found</h1>
      <Link to="/" className="mt-3 inline-block text-blue-700 hover:underline">
        Back to the catalog
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <Link to="/" className="text-xl font-bold text-slate-800">
            Library Catalog
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
