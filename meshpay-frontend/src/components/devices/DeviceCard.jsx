import {
  Smartphone,
  BatteryFull,
  Wifi,
  ShieldCheck,
} from "lucide-react";

export default function DeviceCard({ device }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-4">
            <Smartphone
              className="text-blue-400"
              size={28}
            />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-white">
              {device.deviceName}
            </h3>

            <p className="text-sm text-slate-400">
              {device.deviceId}
            </p>

          </div>

        </div>

        <div
          className={`h-3 w-3 rounded-full ${
            device.online
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        />

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">

          <span className="text-slate-400">
            Battery
          </span>

          <div className="flex items-center gap-2">

            <BatteryFull
              size={18}
              className="text-green-400"
            />

            <span className="text-white">
              {device.batteryLevel}%
            </span>

          </div>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">
            Status
          </span>

          <span
            className={
              device.online
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {device.online ? "Online" : "Offline"}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-400">
            Bridge Node
          </span>

          {device.bridgeNode ? (
            <div className="flex items-center gap-2 text-emerald-400">

              <ShieldCheck size={18} />

              Enabled

            </div>
          ) : (
            <span className="text-slate-500">
              No
            </span>
          )}

        </div>

      </div>

    </div>
  );
}