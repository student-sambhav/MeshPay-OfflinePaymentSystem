import { Handle, Position } from "reactflow";
import {
  Smartphone,
  BatteryFull,
  Wifi,
  ShieldCheck,
} from "lucide-react";

export default function DeviceNode({ data }) {
  return (
    <div className="group min-w-[240px] rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,.25)]">

      <Handle
        type="target"
        position={Position.Top}
      />

      <div className="border-b border-slate-800 p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="rounded-2xl bg-blue-500/10 p-3">

              <Smartphone
                size={24}
                className="text-blue-400"
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

          <div className="relative">

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-60" />

          </div>

        </div>

      </div>

      <div className="space-y-5 p-5">

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-slate-400">
              Battery
            </span>

            <span className="text-white">
              {data.battery}%
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-700">

            <div
              className="h-full rounded-full bg-green-500"
              style={{
                width: `${data.battery}%`,
              }}
            />

          </div>

        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Wifi
              size={18}
              className="text-blue-400"
            />

            <span className="text-slate-300">
              Signal
            </span>

          </div>

          <span className="text-white">
            {data.signal}%
          </span>

        </div>

        {data.bridge && (

          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2">

            <ShieldCheck
              size={18}
              className="text-emerald-400"
            />

            <span className="text-sm text-emerald-400">
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