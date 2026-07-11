import { Handle, Position } from "reactflow";

import {
  BatteryFull,
  Wifi,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

export default function DeviceNode({ data }) {
  return (
    <div className="min-w-[220px] rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

      <Handle
        type="target"
        position={Position.Top}
      />

      <div className="border-b border-slate-800 p-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-500/10 p-3">

              <Smartphone
                className="text-blue-400"
                size={22}
              />

            </div>

            <div>

              <h3 className="font-semibold text-white">
                {data.name}
              </h3>

              <p className="text-xs text-slate-400">
                {data.owner}
              </p>

            </div>

          </div>

          <div
            className={`h-3 w-3 rounded-full ${
              data.status === "online"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          />
        </div>
      </div>

      <div className="space-y-4 p-4">

        <div className="flex items-center justify-between">

          <span className="text-slate-400 text-sm">
            Battery
          </span>

          <div className="flex items-center gap-2">

            <BatteryFull
              size={18}
              className="text-green-400"
            />

            <span className="font-medium text-white">
              {data.battery}%
            </span>

          </div>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-400 text-sm">
            Signal
          </span>

          <div className="flex items-center gap-2">

            <Wifi
              size={18}
              className="text-blue-400"
            />

            <span className="font-medium text-white">
              {data.signal}%
            </span>

          </div>

        </div>

        {data.bridge && (

          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-2">

            <ShieldCheck
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-400">
              Bridge Node
            </span>

          </div>

        )}

      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}