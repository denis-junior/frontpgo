export interface IFunction {
  id_function: number;
  query: string;
  descricao: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
}
