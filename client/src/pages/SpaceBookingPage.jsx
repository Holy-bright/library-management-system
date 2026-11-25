import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

// Hardcoded for now. Week 5 loads spaces from the API.
const SPACES = [
  { id: "1", name: "Room A", seats: 4 },
  { id: "2", name: "Room B", seats: 6 },
  { id: "3", name: "Quiet Pod", seats: 1 },
  { id: "4", name: "Group Study Hall", seats: 12 },
];

const EMPTY_FORM = { spaceId: "", date: "", startTime: "", endTime: "" };

// Today's date as YYYY-MM-DD in the user's own time zone.
function todayString() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export default function SpaceBookingPage() {
  const { user } = useAuth();
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [request, setRequest] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setRequest(null);

    if (!form.spaceId || !form.date || !form.startTime || !form.endTime) {
      setError("Fill in every field.");
      return;
    }
    if (form.date < todayString()) {
      setError("Choose today or a future date.");
      return;
    }
    if (form.endTime <= form.startTime) {
      setError("The end time must be after the start time.");
      return;
    }

    const space = SPACES.find((s) => s.id === form.spaceId);
    setRequest({ ...form, spaceName: space.name });
    setForm(EMPTY_FORM);
  };

  return (
    <section className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-6">
      <h1 className="text-2xl font-bold text-slate-900">Book a study space</h1>
      <p className="mt-1 text-sm text-slate-600">Booking as {user?.name}</p>

      {error && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </p>
      )}

      {request && (
        <div className="mt-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm text-green-800">
          <p className="font-medium">Request ready</p>
          <p>
            {request.spaceName} on {request.date}, {request.startTime} to {request.endTime}.
          </p>
          <p className="mt-1">Bookings connect to the server next week.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="spaceId" className="block text-sm font-medium text-slate-700">
            Study space
          </label>
          <select
            id="spaceId"
            name="spaceId"
            required
            value={form.spaceId}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
          >
            <option value="">Select a study space</option>
            {SPACES.map((space) => (
              <option key={space.id} value={space.id}>
                {space.name} ({space.seats} {space.seats === 1 ? "seat" : "seats"})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-slate-700">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={todayString()}
            value={form.date}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-slate-700">
              Start time
            </label>
            <input
              id="startTime"
              name="startTime"
              type="time"
              required
              value={form.startTime}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-slate-700">
              End time
            </label>
            <input
              id="endTime"
              name="endTime"
              type="time"
              required
              value={form.endTime}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-700 px-3 py-2 font-medium text-white hover:bg-blue-800"
        >
          Request booking
        </button>
      </form>
    </section>
  );
}
