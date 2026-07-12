import {
  Wifi,
  Activity,
} from "lucide-react";

export default function MeshHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Mesh Explorer
        </h1>

        <p className="mt-2 text-slate-400">
          Live visualization of the offline payment network
        </p>

      </div>

      <div className="flex items-center gap-3 rounded-full bg-emerald-500/10 px-5 py-3">

        <Activity
          className="text-emerald-400"
          size={20}
        />

        <span className="font-medium text-emerald-400">
          Network Healthy
        </span>

      </div>

    </div>
  );
}