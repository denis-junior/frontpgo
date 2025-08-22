import { api } from "../utils/API";

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const sellerService = {
  getAllSellers: async () => {
    const response = await api.get("api/seller");
    return response.data;
  },

  getSellerById: async (id: number) => {
    const response = await api.get(`api/seller/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createSeller: async (sellerData: any) => {
    const response = await api.post("api/seller", sellerData);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateSeller: async (id: number, sellerData: any) => {
    const response = await api.put(`api/seller/${id}`, sellerData);
    return response.data;
  },

  deleteSeller: async (id: number) => {
    const response = await api.delete(`api/seller/${id}`);
    return response.data;
  },
};
