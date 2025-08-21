export interface IClient {
  id_cliente: number;
  id_vendedor: number;
  cpf_cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  municipio: string;
  uf: string;
  celular: string;
  comercial: string;
  residencial: string;
  email: string;
  anotacoes: string;
  categoria: string;
  status: string;
  is_signed: boolean;
  created_at: string;
  updated_at: string;
}

export interface IDashboardClient {
  client_id: number;
  client_name: string;
  validaPagamento: {
    dias_sem_venda: number;
    ultimo_pagamento: string;
  };
  validaRecebimento: {
    dias_sem_agendamento: number;
    ultimo_agendamento: string;
    total_agendamentos: string;
  };
  isOnline: boolean;
}
