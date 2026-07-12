import {
  Package,
  ArrowRight,
} from "lucide-react";

export default function PacketCard({
  packet,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-500 transition">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-semibold text-white">
            {packet.id}
          </h3>

          <p className="mt-1 text-slate-400">

            {packet.source}

            <ArrowRight
              className="inline mx-2"
              size={16}
            />

            {packet.destination}

          </p>

        </div>

        <Package
          className="text-cyan-400"
          size={30}
        />

      </div>

      <div className="mt-6 flex justify-between">

        <span className="text-slate-400">
          Status
        </span>

        <span className="rounded-full bg-blue-500/10 px-4 py-1 text-blue-400">
          {packet.status}
        </span>

      </div>

      <div className="mt-3 flex justify-between">

        <span className="text-slate-400">
          TTL
        </span>

        <span className="text-white">
          {packet.ttl}
        </span>

      </div>

      <div className="mt-3 flex justify-between">

        <span className="text-slate-400">
          Hops
        </span>

        <span className="text-white">
          {packet.hops}
        </span>

      </div>

    </div>
  );
}