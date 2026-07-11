import {
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

const transactions = [
  {
    id: "#MP1021",
    sender: "Samsung S24",
    receiver: "Pixel 8",
    amount: "₹500",
    status: "Delivered",
    incoming: false,
  },
  {
    id: "#MP1022",
    sender: "OnePlus",
    receiver: "iPhone",
    amount: "₹250",
    status: "Queued",
    incoming: true,
  },
  {
    id: "#MP1023",
    sender: "Pixel",
    receiver: "Samsung",
    amount: "₹1200",
    status: "Delivered",
    incoming: false,
  },
  {
    id: "#MP1024",
    sender: "Nothing Phone",
    receiver: "Moto",
    amount: "₹750",
    status: "Delivered",
    incoming: true,
  },
];

export default function RecentTransactions() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Recent Transactions
        </h2>

        <button className="text-sm text-blue-400">
          View All
        </button>

      </div>

      <div className="mt-6 space-y-5">

        {transactions.map((tx) => (

          <div
            key={tx.id}
            className="flex items-center justify-between rounded-2xl bg-slate-800 p-4"
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  tx.incoming
                    ? "bg-green-500/10"
                    : "bg-red-500/10"
                }`}
              >
                {tx.incoming ? (
                  <ArrowDownLeft
                    className="text-green-400"
                    size={20}
                  />
                ) : (
                  <ArrowUpRight
                    className="text-red-400"
                    size={20}
                  />
                )}
              </div>

              <div>

                <h4 className="font-semibold text-white">
                  {tx.sender}
                </h4>

                <p className="text-sm text-slate-400">
                  {tx.receiver}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold text-white">
                {tx.amount}
              </p>

              <span
                className={`text-sm ${
                  tx.status === "Delivered"
                    ? "text-green-400"
                    : "text-orange-400"
                }`}
              >
                {tx.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}