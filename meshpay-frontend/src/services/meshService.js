import api from "./api";

const getConnections = async () => {
  const response = await api.get("/api/mesh");
  return response.data;
};

const connectDevices = async (connection) => {
  const response = await api.post("/api/mesh/connect", connection);
  return response.data;
};

export default {
  getConnections,
  connectDevices,
};