import { Loader2 } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="flex h-[80vh] items-center justify-center">

      <div className="text-center">

        <Loader2
          size={60}
          className="mx-auto animate-spin text-blue-500"
        />

        <p className="mt-6 text-slate-400">
          Loading MeshPay...
        </p>

      </div>

    </div>
  );
}