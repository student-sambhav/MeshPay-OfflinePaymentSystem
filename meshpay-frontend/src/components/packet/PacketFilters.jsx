import {
  Search,
  Filter,
} from "lucide-react";

export default function PacketFilters() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            placeholder="Search packet..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-3 pl-11 text-white outline-none"
          />

        </div>

        <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800 px-6 py-3 text-white">

          <Filter size={18} />

          Filter

        </button>

      </div>

    </div>
  );
}