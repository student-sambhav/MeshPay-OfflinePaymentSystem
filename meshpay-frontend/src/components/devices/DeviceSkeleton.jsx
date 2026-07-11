export default function DeviceSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 h-14 w-14 rounded-2xl bg-slate-700" />

      <div className="mb-3 h-6 w-40 rounded bg-slate-700" />

      <div className="mb-8 h-4 w-24 rounded bg-slate-700" />

      <div className="space-y-4">

        <div className="h-5 rounded bg-slate-700" />

        <div className="h-5 rounded bg-slate-700" />

        <div className="h-5 rounded bg-slate-700" />

      </div>

      <div className="mt-8 h-12 rounded-xl bg-slate-700" />

    </div>
  );
}