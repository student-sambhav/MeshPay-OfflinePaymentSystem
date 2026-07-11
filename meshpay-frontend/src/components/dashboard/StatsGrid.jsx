import {
  Wallet,
  Smartphone,
  Package,
  Clock3,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Wallet Balance"
        value="₹9,500"
        subtitle="+12.5% Today"
        icon={Wallet}
        color="text-green-400"
        bgColor="bg-green-500/10"
      />

      <StatsCard
        title="Connected Devices"
        value="4"
        subtitle="2 Bridge Nodes"
        icon={Smartphone}
        color="text-blue-400"
        bgColor="bg-blue-500/10"
      />

      <StatsCard
        title="Packets Delivered"
        value="187"
        subtitle="98.2% Success"
        icon={Package}
        color="text-violet-400"
        bgColor="bg-violet-500/10"
      />

      <StatsCard
        title="Queued Packets"
        value="2"
        subtitle="Retry in 5 sec"
        icon={Clock3}
        color="text-orange-400"
        bgColor="bg-orange-500/10"
      />

    </div>
  );
}