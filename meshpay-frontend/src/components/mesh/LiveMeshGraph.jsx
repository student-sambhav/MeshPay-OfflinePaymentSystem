import { useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

import {
  Activity,
  ShieldCheck,
  Smartphone,
  Timer,
} from "lucide-react";

import DeviceNode from "./DeviceNode";
import {
  initialEdges,
  initialNodes,
} from "./meshData";

export default function LiveMeshGraph() {
  const nodeTypes = useMemo(
    () => ({
      deviceNode: DeviceNode,
    }),
    []
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Live Mesh Network
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Real-time visualization of connected mesh devices
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2">

          <div className="flex items-center gap-2">

            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm font-medium text-emerald-400">
              Network Healthy
            </span>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="grid h-[650px] grid-cols-12">

        {/* Graph */}

        <div className="col-span-9 border-r border-slate-800">

          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{
              padding: 0.25,
            }}
            minZoom={0.6}
            maxZoom={1.6}
            attributionPosition="bottom-left"
          >

            <Background
              gap={24}
              size={1}
              color="#334155"
            />

            <Controls
              showInteractive={false}
            />

          </ReactFlow>

        </div>

        {/* Right Panel */}

        <div className="col-span-3 bg-slate-900 p-6">

          <h3 className="text-lg font-semibold text-white">
            Network Summary
          </h3>

          <div className="mt-6 space-y-4">

            <SummaryCard
              icon={Smartphone}
              title="Online Devices"
              value="4"
              color="text-blue-400"
              bg="bg-blue-500/10"
            />

            <SummaryCard
              icon={ShieldCheck}
              title="Bridge Nodes"
              value="2"
              color="text-emerald-400"
              bg="bg-emerald-500/10"
            />

            <SummaryCard
              icon={Activity}
              title="Delivery Rate"
              value="98.2%"
              color="text-violet-400"
              bg="bg-violet-500/10"
            />

            <SummaryCard
              icon={Timer}
              title="Latency"
              value="24 ms"
              color="text-orange-400"
              bg="bg-orange-500/10"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function SummaryCard({
  icon: Icon,
  title,
  value,
  color,
  bg,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${bg}`}
        >
          <Icon
            size={20}
            className={color}
          />
        </div>

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h4 className="mt-1 text-xl font-bold text-white">
            {value}
          </h4>

        </div>

      </div>

    </div>
  );
}