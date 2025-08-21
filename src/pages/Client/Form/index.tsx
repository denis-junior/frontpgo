import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { IClient } from "../../../interfaces/client";
import getDataFromCep from "../../../utils/viaCep";
import getCnpjApi from "../../../utils/getCnpjApi";
import InputMask from "react-input-mask";
import { ISeller } from "../../../interfaces/seller";

const statusOptions = [
  "UPSELL",
  "NOVO",
  "CONVERTIDO",
  "EM NEGOCIACAO",
  "CANCELADO",
  "DESTRATADO",
];

const categoriaOptions = ["CONTRATO", "UPGRADE", "LEAD"];

const validationSchema = yup.object({
  id_vendedor: yup.number().required("ID Vendedor é obrigatório"),
  cpf_cnpj: yup.string().required("CPF/CNPJ é obrigatório"),
  razao_social: yup.string().required("Razão Social é obrigatória"),
  nome_fantasia: yup.string().required("Nome Fantasia é obrigatório"),
  url_base: yup.string().required("URL Base é obrigatória"),
  usuario_base: yup.string().required("Usuário Base é obrigatório"),
  password_base: yup.string().required("Senha Base é obrigatória"),
  data_base: yup.string().required("Data Base é obrigatória"),
  cep: yup.string().required("CEP é obrigatório"),
  logradouro: yup.string().required("Logradouro é obrigatório"),
  numero: yup.string().required("Número é obrigatório"),
  complemento: yup.string().required("Complemento é obrigatório"),
  bairro: yup.string().required("Bairro é obrigatório"),
  municipio: yup.string().required("Município é obrigatório"),
  uf: yup
    .string()
    .length(2, "UF deve ter 2 caracteres")
    .required("UF é obrigatório"),
  celular: yup.string().required("Celular é obrigatório"),
  comercial: yup.string().required("Telefone Comercial é obrigatório"),
  residencial: yup.string().required("Telefone Residencial é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  anotacoes: yup.string(),
  valorproposto: yup.number().required("Valor Proposto é obrigatório"),
  qtde_usuarios: yup.number().required("Quantidade de Usuários é obrigatória"),
  status: yup.string().oneOf(statusOptions).required("Status é obrigatório"),
  categoria: yup
    .string()
    .oneOf(categoriaOptions)
    .required("Categoria é obrigatória"),
});

interface ClientFormProps {
  initialValues: Partial<IClient>;
  onSubmit: (values: Partial<IClient>) => void;
  onCancel: () => void;
  isEdit?: boolean;
  sellers: ISeller[];
}

export const ClientForm: React.FC<ClientFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  isEdit = false,
  sellers = [],
}) => {
  const formik = useFormik({
    initialValues: {
      id_vendedor: 0,
      cpf_cnpj: "",
      razao_social: "",
      nome_fantasia: "",
      url_base: "",
      usuario_base: "",
      password_base: "",
      data_base: "",
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      municipio: "",
      uf: "",
      celular: "",
      comercial: "",
      residencial: "",
      email: "",
      anotacoes: "",
      valorproposto: 0,
      qtde_usuarios: 0,
      status: "NOVO",
      categoria: "LEAD",
      ...initialValues,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  // Função para buscar e preencher dados do CEP
  const handleCepBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const data = await getDataFromCep(cep);
        if (!data.erro) {
          formik.setFieldValue("logradouro", data.logradouro || "");
          formik.setFieldValue("bairro", data.bairro || "");
          formik.setFieldValue("complemento", data.complemento || "");
          formik.setFieldValue("municipio", data.localidade || "");
          formik.setFieldValue("uf", data.uf || "");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // Você pode exibir um erro se quiser
        formik.setFieldError("cep", "CEP não encontrado");
      }
    }
    // Se quiser, pode chamar o onBlur padrão do Formik:
    formik.handleBlur(e);
  };

  // Função para buscar e preencher dados do CNPJ
  const handleCpfCnpjBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) {
      try {
        const data = await getCnpjApi(value);
        if (data && !data.erro) {
          formik.setFieldValue("razao_social", data.nome || "");
          formik.setFieldValue(
            "nome_fantasia",
            data.fantasia ? data.fantasia : data.nome ? data.nome : ""
          );
          formik.setFieldValue("logradouro", data.logradouro || "");
          formik.setFieldValue("numero", data.numero || "");
          formik.setFieldValue("complemento", data.complemento || "");
          formik.setFieldValue("bairro", data.bairro || "");
          formik.setFieldValue("municipio", data.municipio || "");
          formik.setFieldValue("uf", data.uf || "");
          formik.setFieldValue("cep", data.cep || "");
          formik.setFieldValue("email", data.email || "");
          formik.setFieldValue("comercial", data.telefone || "");
          formik.setFieldValue("celular", data.telefone || "");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        formik.setFieldError("cpf_cnpj", "CNPJ não encontrado ou inválido");
      }
    }
    formik.handleBlur(e);
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={sellers}
            getOptionLabel={(option) => option.name}
            value={
              sellers.find((s) => Number(s.id) === formik.values.id_vendedor) || null
            }
            onChange={(_, value) => {
              formik.setFieldValue("id_vendedor", value ? value.id : "");
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Vendedor"
                error={
                  formik.touched.id_vendedor &&
                  Boolean(formik.errors.id_vendedor)
                }
                helperText={
                  formik.touched.id_vendedor && formik.errors.id_vendedor
                }
              />
            )}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="cpf_cnpj"
            name="cpf_cnpj"
            label="CPF/CNPJ"
            value={formik.values.cpf_cnpj}
            onChange={formik.handleChange}
            onBlur={handleCpfCnpjBlur}
            error={formik.touched.cpf_cnpj && Boolean(formik.errors.cpf_cnpj)}
            helperText={formik.touched.cpf_cnpj && formik.errors.cpf_cnpj}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="razao_social"
            name="razao_social"
            label="Razão Social"
            value={formik.values.razao_social}
            onChange={formik.handleChange}
            error={
              formik.touched.razao_social && Boolean(formik.errors.razao_social)
            }
            helperText={
              formik.touched.razao_social && formik.errors.razao_social
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="nome_fantasia"
            name="nome_fantasia"
            label="Nome Fantasia"
            value={formik.values.nome_fantasia}
            onChange={formik.handleChange}
            error={
              formik.touched.nome_fantasia &&
              Boolean(formik.errors.nome_fantasia)
            }
            helperText={
              formik.touched.nome_fantasia && formik.errors.nome_fantasia
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="(99) 99999-9999"
            value={formik.values.celular}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                fullWidth
                id="celular"
                name="celular"
                label="Celular"
                error={formik.touched.celular && Boolean(formik.errors.celular)}
                helperText={formik.touched.celular && formik.errors.celular}
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask
            mask="(99) 99999-9999"
            value={formik.values.comercial}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                fullWidth
                id="comercial"
                name="comercial"
                label="Comercial"
                error={
                  formik.touched.comercial && Boolean(formik.errors.comercial)
                }
                helperText={formik.touched.comercial && formik.errors.comercial}
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="residencial"
            name="residencial"
            label="Residencial"
            value={formik.values.residencial}
            onChange={formik.handleChange}
            error={
              formik.touched.residencial && Boolean(formik.errors.residencial)
            }
            helperText={formik.touched.residencial && formik.errors.residencial}
            multiline
            maxRows={3} // ou ajuste conforme preferir
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputMask
            mask="99999-999"
            value={formik.values.cep}
            onChange={formik.handleChange}
            onBlur={handleCepBlur}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                fullWidth
                id="cep"
                name="cep"
                label="CEP"
                error={formik.touched.cep && Boolean(formik.errors.cep)}
                helperText={formik.touched.cep && formik.errors.cep}
              />
            )}
          </InputMask>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="municipio"
            name="municipio"
            label="Município"
            value={formik.values.municipio}
            onChange={formik.handleChange}
            error={formik.touched.municipio && Boolean(formik.errors.municipio)}
            helperText={formik.touched.municipio && formik.errors.municipio}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="numero"
            name="numero"
            label="Número"
            value={formik.values.numero}
            onChange={formik.handleChange}
            error={formik.touched.numero && Boolean(formik.errors.numero)}
            helperText={formik.touched.numero && formik.errors.numero}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="logradouro"
            name="logradouro"
            label="Logradouro"
            value={formik.values.logradouro}
            onChange={formik.handleChange}
            error={
              formik.touched.logradouro && Boolean(formik.errors.logradouro)
            }
            helperText={formik.touched.logradouro && formik.errors.logradouro}
            multiline
            maxRows={3} // ou ajuste conforme preferir
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="complemento"
            name="complemento"
            label="Complemento"
            value={formik.values.complemento}
            onChange={formik.handleChange}
            error={
              formik.touched.complemento && Boolean(formik.errors.complemento)
            }
            helperText={formik.touched.complemento && formik.errors.complemento}
            multiline
            maxRows={3} // ou ajuste conforme preferir
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="bairro"
            name="bairro"
            label="Bairro"
            value={formik.values.bairro}
            onChange={formik.handleChange}
            error={formik.touched.bairro && Boolean(formik.errors.bairro)}
            helperText={formik.touched.bairro && formik.errors.bairro}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="usuario_base"
            name="usuario_base"
            label="Usuário Base"
            value={formik.values.usuario_base}
            onChange={formik.handleChange}
            error={
              formik.touched.usuario_base && Boolean(formik.errors.usuario_base)
            }
            helperText={
              formik.touched.usuario_base && formik.errors.usuario_base
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="password_base"
            name="password_base"
            label="Senha Base"
            type="password"
            value={formik.values.password_base}
            onChange={formik.handleChange}
            error={
              formik.touched.password_base &&
              Boolean(formik.errors.password_base)
            }
            helperText={
              formik.touched.password_base && formik.errors.password_base
            }
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            id="data_base"
            name="data_base"
            label="Data Base"
            value={formik.values.data_base}
            onChange={formik.handleChange}
            error={formik.touched.data_base && Boolean(formik.errors.data_base)}
            helperText={formik.touched.data_base && formik.errors.data_base}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="anotacoes"
            name="anotacoes"
            label="Anotações"
            multiline
            value={formik.values.anotacoes}
            onChange={formik.handleChange}
            error={formik.touched.anotacoes && Boolean(formik.errors.anotacoes)}
            helperText={formik.touched.anotacoes && formik.errors.anotacoes}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="url_base"
            name="url_base"
            label="URL Base"
            multiline
            value={formik.values.url_base}
            onChange={formik.handleChange}
            error={formik.touched.url_base && Boolean(formik.errors.url_base)}
            helperText={formik.touched.url_base && formik.errors.url_base}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="valorproposto"
            name="valorproposto"
            label="Valor Proposto"
            type="number"
            value={formik.values.valorproposto}
            onChange={formik.handleChange}
            error={
              formik.touched.valorproposto &&
              Boolean(formik.errors.valorproposto)
            }
            helperText={
              formik.touched.valorproposto && formik.errors.valorproposto
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="qtde_usuarios"
            name="qtde_usuarios"
            label="Qtd. Usuários"
            type="number"
            value={formik.values.qtde_usuarios}
            onChange={formik.handleChange}
            error={
              formik.touched.qtde_usuarios &&
              Boolean(formik.errors.qtde_usuarios)
            }
            helperText={
              formik.touched.qtde_usuarios && formik.errors.qtde_usuarios
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            id="status"
            name="status"
            label="Status"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && Boolean(formik.errors.status)}
            helperText={formik.touched.status && formik.errors.status}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            id="categoria"
            name="categoria"
            label="Categoria"
            value={formik.values.categoria}
            onChange={formik.handleChange}
            error={formik.touched.categoria && Boolean(formik.errors.categoria)}
            helperText={formik.touched.categoria && formik.errors.categoria}
          >
            {categoriaOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Box mt={3} display="flex" justifyContent="center" gap={2}>
        <Button onClick={onCancel} color="secondary" variant="outlined">
          Cancelar
        </Button>
        <Button type="submit" variant="contained" color="primary">
          {isEdit ? "Salvar" : "Adicionar"}
        </Button>
      </Box>
    </form>
  );
};
