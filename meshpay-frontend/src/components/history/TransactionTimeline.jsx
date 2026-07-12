import {
  X,
  Smartphone,
  IndianRupee,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function TransactionDrawer({
  open,
  onClose,
  transaction,
}) {
  if (!open || !transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-md border-l border-slate-800 bg-slate-900 p-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Transaction Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 p-2"
          >
            <X className="text-white" />
          </button>

        </div>

        <Info
          icon={Smartphone}
          label="Sender"
          value={transaction.sender}
        />

        <Info
          icon={Smartphone}
          label="Receiver"
          value={transaction.receiver}
        />

        <Info
          icon={IndianRupee}
          label="Amount"
          value={`₹${transaction.amount}`}
        />

        <Info
          icon={Clock3}
          label="Time"
          value={transaction.time}
        />

        <Info
          icon={ShieldCheck}
          label="Status"
          value={transaction.status}
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
    <div className="mb-4 rounded-2xl bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <Icon
          className="text-blue-400"
          size={20}
        />

        <div>

          <p className="text-sm text-slate-400">
            {label}
          </p>

          <p className="font-semibold text-white">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}