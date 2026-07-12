import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

export default function TransactionCard({
  transaction,
}) {
  const statusStyles = {
    Delivered:
      "bg-green-500/10 text-green-400",
    Pending:
      "bg-yellow-500/10 text-yellow-400",
    Failed:
      "bg-red-500/10 text-red-400",
  };

  const icons = {
    Delivered: CheckCircle2,
    Pending: Clock3,
    Failed: XCircle,
  };

  const Icon = icons[transaction.status];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold text-white">

            {transaction.sender}

            <ArrowRight
              className="mx-2 inline"
              size={18}
            />

            {transaction.receiver}

          </h2>

          <p className="mt-2 text-slate-400">

            Transaction ID

            {" "}

            {transaction.id}

          </p>

        </div>

        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 ${statusStyles[transaction.status]}`}
        >

          <Icon size={18} />

          {transaction.status}

        </div>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <div>

          <p className="text-slate-400">
            Amount
          </p>

          <h3 className="text-3xl font-bold text-white">
            ₹{transaction.amount}
          </h3>

        </div>

        <div className="text-right">

          <p className="text-slate-400">
            Time
          </p>

          <p className="text-white">
            {transaction.time}
          </p>

        </div>

      </div>

    </div>
  );
}