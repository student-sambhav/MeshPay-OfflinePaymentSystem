export default function PacketLegend() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Packet Legend
      </h2>

      <div className="mt-6 space-y-4">

        <Legend
          color="bg-blue-500"
          text="Encrypted Packet"
        />

        <Legend
          color="bg-green-500"
          text="Delivered"
        />

        <Legend
          color="bg-yellow-500"
          text="Queued"
        />

        <Legend
          color="bg-red-500"
          text="Failed"
        />

      </div>

    </div>
  );
}

function Legend({
  color,
  text,
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`h-4 w-4 rounded-full ${color}`}
      />

      <span className="text-white">
        {text}
      </span>

    </div>
  );
}