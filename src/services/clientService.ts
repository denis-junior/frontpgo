import { api } from "../utils/API";

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const clientService = {
  getAllClients: async () => {
    const response = await api.get("/clients");
    return response.data;
  },

  getDashboard: async () => {
    const response = await api.get("/dashboard");
    return response.data;
  },

  getClientById: async (id: number) => {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createClient: async (clientData: any) => {
    const response = await api.post("/clients", clientData);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateClient: async (id: number, clientData: any) => {
    const response = await api.put(`/clients/${id}`, clientData);
    return response.data;
  },

  deleteClient: async (id: number) => {
    const response = await api.delete(`/clients/${id}`);
    return response.data;
  },
};