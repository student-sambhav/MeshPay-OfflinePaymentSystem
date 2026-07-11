import {
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function RoutePreview() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-bold text-white">
        Mesh Route Preview
      </h2>

      <p className="mt-2 text-slate-400">
        Payment packet route through the mesh
      </p>

      <div className="mt-10 flex items-center justify-between">

        <Node name="Samsung S24" />

        <ArrowRight className="text-blue-400" />

        <Node name="OnePlus 13" />

        <ArrowRight className="text-blue-400" />

        <Node name="Pixel 9" />

      </div>

    </div>
  );
}

function Node({ name }) {
  return (
    <div className="flex flex-col items-center">

      <div className="rounded-full bg-blue-500/10 p-5">
        <Smartphone
          size={28}
          className="text-blue-400"
        />
      </div>

      <p className="mt-3 text-white">
        {name}
      </p>

    </div>
  );
}