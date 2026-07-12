const algorithms = [
  {
    title: "Encryption",
    value: "AES-256 GCM",
  },
  {
    title: "Hash",
    value: "SHA-256",
  },
  {
    title: "Key Size",
    value: "256 Bit",
  },
  {
    title: "IV Length",
    value: "128 Bit",
  },
  {
    title: "Integrity",
    value: "Authenticated",
  },
];

export default function CryptoInfo() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-2xl font-bold text-white">
        Cryptography
      </h2>

      <div className="mt-8 space-y-4">

        {algorithms.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl bg-slate-800 p-4"
          >

            <span className="text-slate-400">
              {item.title}
            </span>

            <span className="font-semibold text-white">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}