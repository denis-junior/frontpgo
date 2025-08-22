import { api } from "../utils/API";

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const contractService = {
  getAllContracts: async () => {
    const response = await api.get("api/contracts");
    return response.data;
  },

  getContractById: async (id: number) => {
    const response = await api.get(`api/contracts/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createContract: async (contractData: any) => {
    const response = await api.post("api/contracts", contractData);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateContract: async (id: number, contractData: any) => {
    const response = await api.put(`api/contracts/${id}`, contractData);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStatusContract: async (id: number, contractData: any) => {
    const response = await api.put(`api/contracts/status/${id}`, contractData);
    return response.data;
  },

  signContract: async (id: number,) => {
    const response = await api.put(`api/contracts/sign/${id}`);
    return response.data;
  },

  acceptProposal: async (id: number,) => {
    const response = await api.put(`api/contracts/accept-proposal/${id}`);
    return response.data;
  },

  deleteContract: async (id: number) => {
    const response = await api.delete(`api/contracts/${id}`);
    return response.data;
  },
};
