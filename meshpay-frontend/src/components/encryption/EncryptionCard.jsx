import { Lock } from "lucide-react";

export default function EncryptionCard({
  title,
  value,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-cyan-500/10 p-4">

          <Lock
            className="text-cyan-400"
            size={24}
          />

        </div>

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 font-mono text-lg text-white break-all">
            {value}
          </h3>

        </div>

      </div>

    </div>
  );
}