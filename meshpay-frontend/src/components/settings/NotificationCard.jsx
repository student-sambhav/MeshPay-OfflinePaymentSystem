export default function NotificationCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Notifications
      </h2>

      <div className="mt-8 space-y-5">

        <Notification title="Payment Alerts" />

        <Notification title="Device Offline" />

        <Notification title="Packet Failure" />

      </div>

    </div>
  );
}

function Notification({ title }) {
  return (
    <label className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

      <span className="text-white">
        {title}
      </span>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-green-500"
      />

    </label>
  );
}