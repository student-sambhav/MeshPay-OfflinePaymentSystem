import {
  Search,
  Calendar,
} from "lucide-react";

export default function HistoryFilters() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex flex-col gap-5 lg:flex-row">

        <div className="relative flex-1">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            placeholder="Search transaction..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none"
          />

        </div>

        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800 px-6 py-3 text-white">

          <Calendar size={18} />

          Date

        </button>

      </div>

    </div>
  );
}