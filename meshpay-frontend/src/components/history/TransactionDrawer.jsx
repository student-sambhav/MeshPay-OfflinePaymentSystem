import {
  Lock,
  ShieldCheck,
  Route,
  Send,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Encrypted",
    icon: Lock,
    color: "text-blue-400",
  },
  {
    title: "Signed",
    icon: ShieldCheck,
    color: "text-violet-400",
  },
  {
    title: "Routed",
    icon: Route,
    color: "text-orange-400",
  },
  {
    title: "Forwarded",
    icon: Send,
    color: "text-cyan-400",
  },
  {
    title: "Delivered",
    icon: CheckCircle2,
    color: "text-green-400",
  },
];

export default function TransactionTimeline() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Transaction Journey
      </h2>

      <p className="mt-2 text-slate-400">
        Complete packet lifecycle
      </p>

      <div className="mt-10 flex justify-between">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="relative flex flex-1 flex-col items-center"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 ${step.color}`}
              >
                <Icon size={28} />
              </div>

              <p className="mt-3 text-center text-white">
                {step.title}
              </p>

              {index !== steps.length - 1 && (

                <div className="absolute left-[60%] top-8 h-1 w-full bg-slate-700">

                  <div className="h-full w-1/2 animate-pulse bg-blue-500" />

                </div>

              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}