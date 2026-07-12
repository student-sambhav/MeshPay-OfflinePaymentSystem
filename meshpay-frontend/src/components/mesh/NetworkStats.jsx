import {
  Smartphone,
  ShieldCheck,
  Wifi,
  Timer,
} from "lucide-react";

const stats = [
  {
    title: "Online Devices",
    value: "18",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Bridge Nodes",
    value: "4",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Packet Success",
    value: "98.7%",
    icon: Wifi,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Latency",
    value: "23 ms",
    icon: Timer,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function NetworkStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-slate-400">
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
                  className={item.color}
                  size={28}
                />
              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}