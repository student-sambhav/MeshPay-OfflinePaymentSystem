import {
  CreditCard,
  CheckCircle,
  Clock3,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Payments",
    value: "128",
    icon: CreditCard,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Delivered",
    value: "118",
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Queued",
    value: "7",
    icon: Clock3,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Failed",
    value: "3",
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function PaymentStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">{item.title}</p>

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