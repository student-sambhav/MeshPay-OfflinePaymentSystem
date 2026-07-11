const payments = [
  {
    sender: "Samsung S24",
    receiver: "Pixel 9",
    amount: "₹500",
    status: "Delivered",
  },
  {
    sender: "Pixel 9",
    receiver: "iPhone 16",
    amount: "₹320",
    status: "Queued",
  },
  {
    sender: "OnePlus 13",
    receiver: "Samsung S24",
    amount: "₹1200",
    status: "Failed",
  },
];

export default function RecentPayments() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Recent Payments
      </h2>

      <div className="mt-6 space-y-4">

        {payments.map((payment, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-slate-800 p-5"
          >

            <div>

              <h3 className="font-semibold text-white">
                {payment.sender} → {payment.receiver}
              </h3>

              <p className="text-slate-400">
                {payment.amount}
              </p>

            </div>

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                payment.status === "Delivered"
                  ? "bg-green-500/10 text-green-400"
                  : payment.status === "Queued"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {payment.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}