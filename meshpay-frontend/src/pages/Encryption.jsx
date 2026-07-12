import EncryptionStats from "../components/encryption/EncryptionStats";
import EncryptionFlow from "../components/encryption/EncryptionFlow";
import EncryptionTimeline from "../components/encryption/EncryptionTimeline";
import CryptoInfo from "../components/encryption/CryptoInfo";
import EncryptionCard from "../components/encryption/EncryptionCard";

export default function Encryption() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white">
          Encryption Center
        </h1>

        <p className="mt-2 text-slate-400">
          Visualize how MeshPay encrypts, signs and verifies payment packets.
        </p>

      </div>

      <EncryptionStats />

      <div className="grid gap-6 xl:grid-cols-2">

        <EncryptionCard
          title="Plain Text"
          value="₹500 → Pixel 9"
        />

        <EncryptionCard
          title="Encrypted Payload"
          value="A7F91CB239D1F8AB76D982AF91D2..."
        />

      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <EncryptionFlow />

        </div>

        <CryptoInfo />

      </div>

      <EncryptionTimeline />

    </div>
  );
}