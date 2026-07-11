import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function WalletCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
    >
      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2">

            <Wallet
              className="text-green-400"
              size={22}
            />

            <h3 className="text-lg font-semibold text-white">
              Wallet Overview
            </h3>

          </div>

          <h1 className="mt-5 text-5xl font-bold text-white">
            ₹9,500
          </h1>

          <p className="mt-2 text-slate-400">
            Current Available Balance
          </p>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-slate-800 p-4">

          <div className="flex items-center gap-2">

            <ArrowDownRight
              className="text-green-400"
              size={18}
            />

            <span className="text-slate-300">
              Income
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-green-400">
            ₹14,250
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-800 p-4">

          <div className="flex items-center gap-2">

            <ArrowUpRight
              className="text-red-400"
              size={18}
            />

            <span className="text-slate-300">
              Expense
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-red-400">
            ₹4,750
          </h3>

        </div>

      </div>
    </motion.div>
  );
}