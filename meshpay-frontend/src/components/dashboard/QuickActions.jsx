import { motion } from "framer-motion";
import {
  Smartphone,
  CreditCard,
  Network,
  Package,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Register Device",
    subtitle: "Add a new mesh node",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Send Payment",
    subtitle: "Transfer money securely",
    icon: CreditCard,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Mesh Explorer",
    subtitle: "Visualize network topology",
    icon: Network,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Packet Monitor",
    subtitle: "Track live packet routing",
    icon: Package,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Frequently used operations
        </p>

      </div>

      <div className="space-y-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <motion.button
              key={action.title}
              whileHover={{
                scale: 1.02,
                x: 4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-800
                bg-slate-800/70
                p-5
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:bg-slate-800
              "
            >

              <div className="flex items-center gap-5">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.bg}`}
                >
                  <Icon
                    size={28}
                    className={action.color}
                  />
                </div>

                <div className="text-left">

                  <h3 className="text-lg font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {action.subtitle}
                  </p>

                </div>

              </div>

              <ArrowRight
                size={20}
                className="text-slate-500 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white"
              />

            </motion.button>

          );

        })}

      </div>

    </div>
  );
}