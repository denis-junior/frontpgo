import { api } from "../utils/API";
import { IChangePasswordRequest, IChangePasswordResponse } from "../interfaces/user";

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const userService = {
  getAllUsers: async () => {
    const response = await api.get("api/users");
    return response.data;
  },

  getUserById: async (id: number) => {
    const response = await api.get(`api/users/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createUser: async (userData: any) => {
    const response = await api.post("api/users/register", userData);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateUser: async (id: number, userData: any) => {
    const response = await api.put(`api/users/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id: number) => {
    const response = await api.delete(`api/users/${id}`);
    return response.data;
  },

  changePassword: async (data: IChangePasswordRequest): Promise<IChangePasswordResponse> => {
    const response = await api.post("api/users/change-password", data);
    return response.data;
  },
};
