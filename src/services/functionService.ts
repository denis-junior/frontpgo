import { api } from "../utils/API";

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface IExecFunctionData {
  descricao: string;
  query: string;
  is_active: boolean;
  selectedClinic: string;
  id_function: 1;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export const functionService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createFunction: async (functionData: any) => {
    const response = await api.post("api/functions", functionData);
    return response.data;
  },

  getAllFunctions: async () => {
    const response = await api.get("api/functions");
    return response.data;
  },

  getFunctionById: async (id: number) => {
    const response = await api.get(`api/functions/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateFunction: async (id: number, functionData: any) => {
    const response = await api.put(`api/functions/${id}`, functionData);
    return response.data;
  },

  deleteFunction: async (id: number) => {
    const response = await api.delete(`api/functions/${id}`);
    return response.data;
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  executeQuery: async (data: IExecFunctionData) => {
    let response;
    if (data.selectedClinic == "All") {
      response = await api.post("api/functions/execute-query-for-all", data);
    } else {
      response = await api.post("api/functions/execute-query", data);
    }
    return response.data;
  },
};
