import axios from "axios";

interface ViaCepResponse {
  erro: string | boolean;
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

function getDataFromCep(cep: string): Promise<ViaCepResponse> {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return axios
    .get<ViaCepResponse>(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export default getDataFromCep;
