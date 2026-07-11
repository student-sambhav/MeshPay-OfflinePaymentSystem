import { useState } from "react";
import { X, Smartphone, Cpu, ShieldCheck } from "lucide-react";

export default function RegisterDeviceModal({
  open,
  onClose,
  onRegister,
}) {
  const [formData, setFormData] = useState({
    deviceName: "",
    deviceId: "",
    bridgeNode: false,
  });

  if (!open) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    onRegister(formData);

    setFormData({
      deviceName: "",
      deviceId: "",
      bridgeNode: false,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Register Device
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-slate-800"
          >
            <X className="text-white" />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <Input
            icon={Smartphone}
            label="Device Name"
            name="deviceName"
            value={formData.deviceName}
            onChange={handleChange}
          />

          <Input
            icon={Cpu}
            label="Device ID"
            name="deviceId"
            value={formData.deviceId}
            onChange={handleChange}
          />

          <label className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-4">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-emerald-400" />

              <span className="text-white">
                Bridge Node
              </span>

            </div>

            <input
              type="checkbox"
              name="bridgeNode"
              checked={formData.bridgeNode}
              onChange={handleChange}
              className="h-5 w-5 accent-blue-600"
            />

          </label>

          <button
            className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500"
          >
            Register Device
          </button>

        </form>

      </div>

    </div>
  );
}

function Input({
  icon: Icon,
  label,
  ...props
}) {
  return (
    <div>

      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-4">

        <Icon
          size={20}
          className="text-blue-400"
        />

        <input
          className="w-full bg-transparent py-4 text-white outline-none"
          {...props}
        />

      </div>

    </div>
  );
}