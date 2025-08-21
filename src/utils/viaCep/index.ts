import axios from "axios";

const VIA_CEP_URL = import.meta.env.VITE_VIA_CEP_URL || 'https://viacep.com.br/ws';

export const fetchAddressByCep = async (cep: string) => {
  try {
    const response = await axios.get(`${VIA_CEP_URL}/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    throw error;
  }
};
