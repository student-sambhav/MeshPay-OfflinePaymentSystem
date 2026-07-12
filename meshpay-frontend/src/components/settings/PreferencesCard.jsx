export default function PreferencesCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Mesh Preferences
      </h2>

      <div className="mt-8 space-y-5">

        <Preference
          title="Auto Discover Devices"
        />

        <Preference
          title="Automatic Packet Retry"
        />

        <Preference
          title="Background Sync"
        />

      </div>

    </div>
  );
}

function Preference({ title }) {
  return (
    <label className="flex items-center justify-between rounded-2xl bg-slate-800 p-4">

      <span className="text-white">
        {title}
      </span>

      <input
        type="checkbox"
        defaultChecked
        className="h-5 w-5 accent-blue-600"
      />

    </label>
  );
}