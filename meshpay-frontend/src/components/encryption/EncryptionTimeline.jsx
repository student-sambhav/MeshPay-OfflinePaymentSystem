import {
  FileText,
  Lock,
  Fingerprint,
  Send,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Packet Created",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    title: "AES Encryption",
    icon: Lock,
    color: "text-cyan-400",
  },
  {
    title: "SHA-256 Signature",
    icon: Fingerprint,
    color: "text-violet-400",
  },
  {
    title: "Packet Forwarded",
    icon: Send,
    color: "text-orange-400",
  },
  {
    title: "Verified",
    icon: CheckCircle2,
    color: "text-green-400",
  },
];

export default function EncryptionTimeline() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Encryption Process
      </h2>

      <div className="mt-10">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="flex gap-5"
            >

              <div className="flex flex-col items-center">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">

                  <Icon
                    size={20}
                    className={step.color}
                  />

                </div>

                {index !== steps.length - 1 && (
                  <div className="h-12 w-[2px] bg-slate-700" />
                )}

              </div>

              <div className="pb-8">

                <h3 className="font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Completed Successfully
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}