import {
  CreditCard,
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Transactions",
    value: "286",
    icon: CreditCard,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Successful",
    value: "271",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Pending",
    value: "9",
    icon: Clock3,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Volume",
    value: "₹92K",
    icon: IndianRupee,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function HistoryStats() {
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