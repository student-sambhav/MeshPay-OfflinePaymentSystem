import { Inbox } from "lucide-react";

export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 py-20 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">

        <Inbox
          size={36}
          className="text-slate-500"
        />

      </div>

      <h2 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

    </div>
  );
}