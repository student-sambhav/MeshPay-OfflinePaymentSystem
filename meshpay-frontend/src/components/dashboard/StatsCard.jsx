import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "text-blue-400",
  iconBg = "bg-blue-500/10",
  trend,
  suffix = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-blue-500/10
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            {value}
            {suffix}
          </h2>

          {trend && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
              <TrendingUp
                size={15}
                className="text-emerald-400"
              />

              <span className="text-sm font-medium text-emerald-400">
                {trend}
              </span>
            </div>
          )}
        </div>

        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${iconBg}
          `}
        >
          <Icon
            size={30}
            className={color}
          />
        </div>
      </div>
    </motion.div>
  );
}