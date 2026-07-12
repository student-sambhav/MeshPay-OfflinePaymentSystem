import {
  Lock,
  ShieldCheck,
  KeyRound,
  Fingerprint,
} from "lucide-react";

const stats = [
  {
    title: "Algorithm",
    value: "AES-256",
    icon: Lock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Key Length",
    value: "256 Bit",
    icon: KeyRound,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Integrity",
    value: "Verified",
    icon: ShieldCheck,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Signature",
    value: "SHA-256",
    icon: Fingerprint,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
];

export default function EncryptionStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {item.value}
                </h2>

              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon
                  size={28}
                  className={item.color}
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}