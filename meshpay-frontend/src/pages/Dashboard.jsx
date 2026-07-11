import { useEffect, useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import LiveMeshGraph from "../components/dashboard/LiveMeshGraph";
import ActivityChart from "../components/dashboard/ActivityChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import QuickActions from "../components/dashboard/QuickActions";

import dashboardService from "../services/dashboardService";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    walletBalance: 0,
    deviceCount: 0,
    deliveredPackets: 0,
    queuedPackets: 0,
    meshConnections: [],
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await dashboardService.getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDashboard();
  }, []);

  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid
        walletBalance={dashboardData.walletBalance}
        deviceCount={dashboardData.deviceCount}
        deliveredPackets={dashboardData.deliveredPackets}
        queuedPackets={dashboardData.queuedPackets}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <LiveMeshGraph
            connections={dashboardData.meshConnections}
          />
        </div>

        <div className="col-span-4">
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7">
          <RecentTransactions />
        </div>

        <div className="col-span-5">
          <ActivityChart />
        </div>
      </div>
    </div>
  );
}