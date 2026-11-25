export default function SortControl({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Sort books"
      className="rounded-md border border-slate-300 bg-white px-3 py-2"
    >
      <option value="title">Sort by title</option>
      <option value="author">Sort by author</option>
    </select>
  );
}
