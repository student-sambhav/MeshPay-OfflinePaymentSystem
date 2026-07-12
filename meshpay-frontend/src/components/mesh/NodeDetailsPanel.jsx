import {
  Smartphone,
  BatteryFull,
  Wifi,
  ShieldCheck,
  User,
} from "lucide-react";

export default function NodeDetailsPanel() {

  const device = {
    name: "Samsung S24",
    owner: "Sambhav",
    battery: 92,
    signal: 95,
    packets: 18,
    bridge: true,
    latency: "23 ms",
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Selected Device
      </h2>

      <div className="mt-8 flex justify-center">

        <div className="rounded-full bg-blue-500/10 p-6">

          <Smartphone
            className="text-blue-400"
            size={38}
          />

        </div>

      </div>

      <h3 className="mt-5 text-center text-2xl font-bold text-white">
        {device.name}
      </h3>

      <div className="mt-8 space-y-4">

        <Info icon={User} label="Owner" value={device.owner} />

        <Info
          icon={BatteryFull}
          label="Battery"
          value={`${device.battery}%`}
        />

        <Info
          icon={Wifi}
          label="Signal"
          value={`${device.signal}%`}
        />

        <Info
          icon={ShieldCheck}
          label="Bridge Node"
          value={device.bridge ? "Enabled" : "No"}
        />

        <Info
          icon={Wifi}
          label="Latency"
          value={device.latency}
        />

        <Info
          icon={Smartphone}
          label="Packets"
          value={device.packets}
        />

      </div>

    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <Icon
          className="text-blue-400"
          size={20}
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