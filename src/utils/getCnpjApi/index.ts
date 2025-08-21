import axios from "axios";
import { api } from "../API";

const CNPJ_API_URL = import.meta.env.VITE_CNPJ_API_URL || 'https://www.receitaws.com.br/v1/cnpj';

export const fetchCompanyByCnpj = async (cnpj: string) => {
  try {
    const cleanedCnpj = cnpj.replace(/\D/g, "");
    const response = await axios.get(`${CNPJ_API_URL}/${cleanedCnpj}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar CNPJ:", error);
    throw error;
  }
};

interface CnpjResponse {
  erro: boolean | string;
  abertura: string;
  situacao: string;
  tipo: string;
  nome: string;
  porte: string;
  natureza_juridica: string;
  atividade_principal: Array<{
    code: string;
    text: string;
  }>;
  atividades_secundarias: Array<{
    code: string;
    text: string;
  }>;
  qsa: Array<{
    nome: string;
    qual: string;
    pais_origem?: string;
    nome_rep_legal?: string;
    qual_rep_legal?: string;
  }>;
  logradouro: string;
  numero: string;
  complemento?: string;
  municipio: string;
  bairro?: string;
  uf: string;
  cep?: string;
  email?: string;
  telefone?: string;
  data_situacao: string;
  cnpj: string;
  ultima_atualizacao: string;
  status: string;
  fantasia?: string;
  efr?: string;
  motivo_situacao?: string;
  situacao_especial?: string;
  data_situacao_especial?: string;
  capital_social?: string;
  simples?: {
    optante: boolean;
    data_opcao?: null | Date | string;
    data_exclusao?: null | Date | string;
    ultima_atualizacao: Date | string;
  };
  simei?: {
    optante: boolean;
    data_opcao?: null | Date | string;
    data_exclusao?: null | Date | string;
    ultima_atualizacao: Date | string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra?: Record<string, any>;
  billing: {
    free: boolean;
    database: boolean;
  };
}

export async function getCnpjApi(cnpj: string): Promise<CnpjResponse> {
  const response = await api.get<CnpjResponse>("/getCnpjApi/" + cnpj);
  return response.data;
}

export default getCnpjApi;
