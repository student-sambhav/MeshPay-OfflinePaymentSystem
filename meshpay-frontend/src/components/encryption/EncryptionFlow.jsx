import {
  ArrowDown,
  FileText,
  Lock,
  Fingerprint,
  CheckCircle2,
} from "lucide-react";

export default function EncryptionFlow() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        Encryption Pipeline
      </h2>

      <div className="mt-10 flex flex-col items-center">

        <Step
          icon={FileText}
          color="text-blue-400"
          title="Plain Text"
          value="₹500 → Pixel 9"
        />

        <ArrowDown className="my-5 text-slate-500" />

        <Step
          icon={Lock}
          color="text-cyan-400"
          title="AES-256 Encryption"
          value="A7F91CDA91FFB82D..."
        />

        <ArrowDown className="my-5 text-slate-500" />

        <Step
          icon={Fingerprint}
          color="text-violet-400"
          title="SHA-256 Signature"
          value="1A7C0D91EF45AA..."
        />

        <ArrowDown className="my-5 text-slate-500" />

        <Step
          icon={CheckCircle2}
          color="text-green-400"
          title="Integrity Verified"
          value="Packet Ready"
        />

      </div>

    </div>
  );
}

function Step({
  icon: Icon,
  color,
  title,
  value,
}) {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-800 p-5">

      <div className="flex items-center gap-4">

        <Icon
          className={color}
          size={26}
        />

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h3 className="mt-1 font-mono text-white break-all">
            {value}
          </h3>

        </div>

      </div>

    </div>
  );
}