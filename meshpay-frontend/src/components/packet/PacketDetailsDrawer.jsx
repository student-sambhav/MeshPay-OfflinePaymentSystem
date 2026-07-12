import {
  X,
  Package,
  Clock3,
  Route,
  ShieldCheck,
  Timer,
} from "lucide-react";

export default function PacketDetailsDrawer({
  open,
  onClose,
  packet,
}) {
  if (!open || !packet) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">

      <div className="h-full w-full max-w-md border-l border-slate-800 bg-slate-900 p-6">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Packet Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 p-2"
          >
            <X className="text-white"/>
          </button>

        </div>

        <Info
          icon={Package}
          label="Packet ID"
          value={packet.id}
        />

        <Info
          icon={Route}
          label="Route"
          value={`${packet.source} → ${packet.destination}`}
        />

        <Info
          icon={Clock3}
          label="Status"
          value={packet.status}
        />

        <Info
          icon={Timer}
          label="TTL"
          value={packet.ttl}
        />

        <Info
          icon={ShieldCheck}
          label="Encryption"
          value="AES-256"
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
          size={20}
          className="text-cyan-400"
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