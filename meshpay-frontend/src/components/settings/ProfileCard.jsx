import {
  User,
  Phone,
  Mail,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Profile
      </h2>

      <div className="mt-8 flex items-center gap-5">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10">

          <User
            size={38}
            className="text-blue-400"
          />

        </div>

        <div>

          <h3 className="text-xl font-semibold text-white">
            Sambhav Gupta
          </h3>

          <p className="text-slate-400">
            MeshPay User
          </p>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <Info
          icon={Phone}
          label="Phone"
          value="+91 9876543210"
        />

        <Info
          icon={Mail}
          label="Email"
          value="sambhav@example.com"
        />

      </div>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-800 p-4">

      <Icon
        className="text-blue-400"
        size={18}
      />

      <div>

        <p className="text-xs text-slate-400">
          {label}
        </p>

        <p className="text-white">
          {value}
        </p>

      </div>

    </div>
  );
}