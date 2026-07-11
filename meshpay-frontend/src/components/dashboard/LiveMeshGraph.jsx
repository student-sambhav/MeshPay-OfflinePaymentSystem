import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 50, y: 150 },
    data: { label: "📱 Samsung S24" },
    style: {
      background: "#1e293b",
      color: "#fff",
      border: "2px solid #3b82f6",
      borderRadius: "12px",
      padding: "10px",
      width: 160,
      textAlign: "center",
      fontWeight: "600",
    },
  },
  {
    id: "2",
    position: { x: 320, y: 40 },
    data: { label: "📱 OnePlus 13" },
    style: {
      background: "#1e293b",
      color: "#fff",
      border: "2px solid #22c55e",
      borderRadius: "12px",
      padding: "10px",
      width: 160,
      textAlign: "center",
      fontWeight: "600",
    },
  },
  {
    id: "3",
    position: { x: 600, y: 150 },
    data: { label: "📱 Pixel 9" },
    style: {
      background: "#1e293b",
      color: "#fff",
      border: "2px solid #a855f7",
      borderRadius: "12px",
      padding: "10px",
      width: 160,
      textAlign: "center",
      fontWeight: "600",
    },
  },
  {
    id: "4",
    position: { x: 320, y: 280 },
    data: { label: "📱 iPhone 16" },
    style: {
      background: "#1e293b",
      color: "#fff",
      border: "2px solid #f59e0b",
      borderRadius: "12px",
      padding: "10px",
      width: 160,
      textAlign: "center",
      fontWeight: "600",
    },
  },
];

const edges = [
  {
    id: "e1",
    source: "1",
    target: "2",
    animated: true,
    label: "8 ms",
    style: {
      stroke: "#3b82f6",
      strokeWidth: 2,
    },
  },
  {
    id: "e2",
    source: "2",
    target: "3",
    animated: true,
    label: "5 ms",
    style: {
      stroke: "#22c55e",
      strokeWidth: 2,
    },
  },
  {
    id: "e3",
    source: "2",
    target: "4",
    animated: true,
    label: "12 ms",
    style: {
      stroke: "#a855f7",
      strokeWidth: 2,
    },
  },
];

export default function LiveMeshGraph() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Live Mesh Network
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Connected devices communicating in real time
          </p>
        </div>

        <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
          ● Network Online
        </div>

      </div>

      <div className="h-[550px] overflow-hidden rounded-xl border border-slate-800">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          attributionPosition="bottom-left"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable
          zoomOnScroll
          panOnDrag
        >
          <MiniMap
            pannable
            zoomable
          />

          <Controls />

          <Background
            gap={20}
            size={1}
          />

        </ReactFlow>

      </div>

    </div>
  );
}