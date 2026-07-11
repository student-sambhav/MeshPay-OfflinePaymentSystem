import { useState } from "react";

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    amount: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Send Payment
      </h2>

      <p className="mt-2 text-slate-400">
        Create an offline payment packet
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <div>

          <label className="mb-2 block text-slate-400">
            Sender Device
          </label>

          <select
            name="sender"
            value={formData.sender}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white"
          >
            <option>Samsung S24</option>
            <option>Pixel 9</option>
            <option>OnePlus 13</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block text-slate-400">
            Receiver Device
          </label>

          <select
            name="receiver"
            value={formData.receiver}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white"
          >
            <option>iPhone 16</option>
            <option>Pixel 9</option>
            <option>Samsung S24</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block text-slate-400">
            Amount
          </label>

          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="₹500"
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white outline-none"
          />

        </div>

        <button className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500">
          Send Payment
        </button>

      </form>

    </div>
  );
}