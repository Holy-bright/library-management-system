import { Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ReadingListProvider } from "./context/ReadingListContext.jsx";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import ReadingListPage from "./pages/ReadingListPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import SpaceBookingPage from "./pages/SpaceBookingPage.jsx";

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
    <AuthProvider>
      <ReadingListProvider>
        <div className="min-h-screen">
          <Navbar />

          <main className="mx-auto max-w-6xl px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/reading-list" element={<ReadingListPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/book-space"
                element={
                  <ProtectedRoute>
                    <SpaceBookingPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ReadingListProvider>
    </AuthProvider>
  );
}
