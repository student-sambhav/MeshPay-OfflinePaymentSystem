import {
  Package,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Packets",
    value: "158",
    icon: Package,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Queued",
    value: "8",
    icon: Clock3,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Delivered",
    value: "146",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Dropped",
    value: "4",
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function PacketStats() {
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