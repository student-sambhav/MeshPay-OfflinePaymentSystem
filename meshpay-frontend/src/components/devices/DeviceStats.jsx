import {
  Smartphone,
  Wifi,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";

const stats = [
  {
    title: "Total Devices",
    value: "4",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Online",
    value: "3",
    icon: Wifi,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Bridge Nodes",
    value: "2",
    icon: ShieldCheck,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Avg Battery",
    value: "87%",
    icon: BatteryCharging,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function DeviceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon
                  size={28}
                  className={item.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}