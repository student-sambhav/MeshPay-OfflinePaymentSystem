import api from "../services/axios";

export const dashboardApi = {
  getDashboard() {
    return api.get("/api/dashboard");
  },
};