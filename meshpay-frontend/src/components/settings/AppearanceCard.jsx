import { Moon } from "lucide-react";

export default function AppearanceCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Appearance
      </h2>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-800 py-4 text-white hover:bg-slate-700">

        <Moon size={18} />

        Dark Mode

      </button>

    </div>
  );
}