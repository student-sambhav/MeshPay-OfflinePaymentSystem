import {
  X,
  Smartphone,
  BatteryFull,
  Wifi,
  ShieldCheck,
} from "lucide-react";

export default function DeviceDetailsDrawer({
  open,
  onClose,
  device,
}) {
  if (!open || !device) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-md border-l border-slate-800 bg-slate-900 p-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Device Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 p-2 hover:bg-slate-700"
          >
            <X className="text-white" />
          </button>

        </div>

        <div className="flex flex-col items-center">

          <div className="rounded-full bg-blue-500/10 p-6">

            <Smartphone
              className="text-blue-400"
              size={40}
            />

          </div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            {device.deviceName}
          </h3>

          <p className="text-slate-400">
            {device.deviceId}
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <InfoRow
            icon={BatteryFull}
            label="Battery"
            value={`${device.batteryLevel}%`}
          />

          <InfoRow
            icon={Wifi}
            label="Status"
            value={device.online ? "Online" : "Offline"}
          />

          <InfoRow
            icon={ShieldCheck}
            label="Bridge Node"
            value={device.bridgeNode ? "Enabled" : "Disabled"}
          />

          <div className="rounded-2xl border border-slate-800 bg-slate-800 p-4">

            <p className="text-sm text-slate-400">
              Owner
            </p>

            <p className="mt-1 font-semibold text-white">
              {device.owner?.name ?? "Unknown"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className="text-blue-400"
        />

        <span className="text-slate-300">
          {label}
        </span>

      </div>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}