import deviceService from "./deviceService";
import meshService from "./meshService";

const getDashboardData = async () => {
  try {
    const [devices, meshConnections] = await Promise.all([
      deviceService.getDevices(),
      meshService.getConnections(),
    ]);

    return {
      walletBalance: 0,
      deviceCount: devices.length,
      deliveredPackets: 0,
      queuedPackets: 0,
      meshConnections,
    };
  } catch (error) {
    console.error("Failed to load dashboard", error);
    throw error;
  }
};

export default {
  getDashboardData,
};