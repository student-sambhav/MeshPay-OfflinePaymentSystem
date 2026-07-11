import {
  Lock,
  Route,
  Send,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Encrypt",
    icon: Lock,
  },
  {
    title: "Route",
    icon: Route,
  },
  {
    title: "Forward",
    icon: Send,
  },
  {
    title: "Delivered",
    icon: CheckCircle,
  },
];

export default function PaymentTimeline() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Payment Flow
      </h2>

      <div className="mt-10 flex justify-between">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (

            <div
              key={step.title}
              className="flex flex-1 flex-col items-center"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">

                <Icon
                  className="text-blue-400"
                  size={28}
                />

              </div>

              <p className="mt-3 text-white">
                {step.title}
              </p>

              {index !== steps.length - 1 && (
                <div className="mt-5 h-1 w-full bg-slate-700" />
              )}

            </div>

          );

        })}

      </div>

    </div>
  );
}