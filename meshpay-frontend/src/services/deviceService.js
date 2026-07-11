import api from "./api";

const DEVICE_URL = "/api/devices";

const deviceService = {
  getAll: async () => {
    const response = await api.get(DEVICE_URL);
    return response.data;
  },

  register: async (device) => {
    const response = await api.post(
      `${DEVICE_URL}/register`,
      device
    );
    return response.data;
  },
};

export default deviceService;