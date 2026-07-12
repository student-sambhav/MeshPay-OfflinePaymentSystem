import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">

      <div className="rounded-full bg-red-500/10 p-6">

        <AlertTriangle
          size={60}
          className="text-red-400"
        />

      </div>

      <h1 className="mt-8 text-6xl font-bold text-white">
        404
      </h1>

      <p className="mt-3 text-slate-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
      >
        Go to Dashboard
      </Link>

    </div>
  );
}