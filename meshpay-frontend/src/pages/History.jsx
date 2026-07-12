import { useState } from "react";

import HistoryStats from "../components/history/HistoryStats";
import HistoryFilters from "../components/history/HistoryFilters";
import TransactionCard from "../components/history/TransactionCard";
import TransactionTimeline from "../components/history/TransactionTimeline";
import TransactionDrawer from "../components/history/TransactionDrawer";

const transactions = [
  {
    id: "TXN-1001",
    sender: "Samsung S24",
    receiver: "Pixel 9",
    amount: 500,
    status: "Delivered",
    time: "10:15 AM",
  },
  {
    id: "TXN-1002",
    sender: "Pixel 9",
    receiver: "iPhone 16",
    amount: 320,
    status: "Pending",
    time: "11:40 AM",
  },
  {
    id: "TXN-1003",
    sender: "OnePlus 13",
    receiver: "Samsung S24",
    amount: 1200,
    status: "Failed",
    time: "2:10 PM",
  },
];

export default function History() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Transaction History
        </h1>

        <p className="text-slate-400">
          View all offline payment transactions
        </p>

      </div>

      <HistoryStats />

      <HistoryFilters />

      <TransactionTimeline />

      <div className="space-y-5">

        {transactions.map((tx) => (

          <div
            key={tx.id}
            onClick={() => setSelected(tx)}
            className="cursor-pointer"
          >

            <TransactionCard
              transaction={tx}
            />

          </div>

        ))}

      </div>

      <TransactionDrawer
        open={selected !== null}
        transaction={selected}
        onClose={() => setSelected(null)}
      />

    </div>
  );
}