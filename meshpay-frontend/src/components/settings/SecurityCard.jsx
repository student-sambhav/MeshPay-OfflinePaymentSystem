import { Lock } from "lucide-react";

export default function SecurityCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Security
      </h2>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-white hover:bg-blue-500">

        <Lock size={18} />

        Change Password

      </button>

    </div>
  );
}