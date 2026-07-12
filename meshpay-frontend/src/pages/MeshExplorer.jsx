import MeshHeader from "../components/mesh/MeshHeader";
import MeshToolbar from "../components/mesh/MeshToolbar";
import NetworkStats from "../components/mesh/NetworkStats";
import LiveMeshGraph from "../components/mesh/LiveMeshGraph";
import PacketLegend from "../components/mesh/PacketLegend";
import NodeDetailsPanel from "../components/mesh/NodeDetailsPanel";

export default function MeshExplorer() {
  return (
    <div className="space-y-8">

      <MeshHeader />

      <NetworkStats />

      <MeshToolbar />

      <div className="grid gap-6 xl:grid-cols-4">

        <div className="xl:col-span-3">

          <LiveMeshGraph />

        </div>

        <div className="space-y-6">

          <PacketLegend />

          <NodeDetailsPanel />

        </div>

      </div>

    </div>
  );
}