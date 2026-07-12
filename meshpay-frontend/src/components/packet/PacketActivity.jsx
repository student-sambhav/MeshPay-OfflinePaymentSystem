export default function PacketActivity() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Live Activity
      </h2>

      <div className="mt-8 space-y-4">

        <Activity
          text="Packet PKT-1001 forwarded to Pixel"
        />

        <Activity
          text="AES Encryption completed"
        />

        <Activity
          text="Packet delivered successfully"
        />

        <Activity
          text="Retry initiated for PKT-1008"
        />

      </div>

    </div>
  );
}

function Activity({
  text,
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />

      <span className="text-slate-300">
        {text}
      </span>

    </div>
  );
}