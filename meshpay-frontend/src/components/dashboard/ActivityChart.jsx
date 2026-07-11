import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 15 },
  { day: "Tue", value: 24 },
  { day: "Wed", value: 19 },
  { day: "Thu", value: 34 },
  { day: "Fri", value: 42 },
  { day: "Sat", value: 36 },
  { day: "Sun", value: 51 },
];

export default function ActivityChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold text-white">
          Payment Activity
        </h2>

        <p className="text-sm text-slate-400">
          Transactions processed this week
        </p>

      </div>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="activity"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#3B82F6"
                  stopOpacity={0.7}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#activity)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}