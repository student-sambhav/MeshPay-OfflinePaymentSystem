export default function AboutCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        About MeshPay
      </h2>

      <p className="mt-6 leading-7 text-slate-400">

        MeshPay enables secure offline digital payments
        using a decentralized Bluetooth mesh network.
        Transactions are encrypted, routed across nearby
        devices, and synchronized when connectivity is restored.

      </p>

      <div className="mt-8 rounded-2xl bg-slate-800 p-5">

        <p className="text-slate-400">
          Version
        </p>

        <h3 className="mt-2 text-white">
          v1.0.0
        </h3>

      </div>

    </div>
  );
}