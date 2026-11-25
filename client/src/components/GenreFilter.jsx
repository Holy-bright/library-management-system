import { useEffect, useState } from "react";
import api from "../api.js";

export default function GenreFilter({ value, onChange }) {
  const [genres, setGenres] = useState([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    api
      .get("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") setFailed(true);
      });

    return () => controller.abort();
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={failed}
      aria-label="Filter by genre"
      className="rounded-md border border-slate-300 bg-white px-3 py-2"
    >
      <option value="">{failed ? "Genres unavailable" : "All genres"}</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}
