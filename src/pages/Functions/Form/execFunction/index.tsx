import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Grid, MenuItem } from "@mui/material";
import { IFunction } from "../../../../interfaces/function";
import { IClient } from "../../../../interfaces/client";
import Icon from "../../../../components/CustomIcon";

const validationSchema = yup.object({
  descricao: yup.string().required("Descrição é obrigatória"),
  query: yup.string().required("Query é obrigatória"),
  is_active: yup.boolean().required("Status é obrigatório"),
});

interface ExecFunctionFormProps {
  initialValues: Partial<IFunction>;
  clinics: IClient[];
  onSubmit: (values: Partial<IFunction>) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const ExecFunctionForm: React.FC<ExecFunctionFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  clinics
}) => {
  const formik = useFormik({
    initialValues: {
      descricao: "",
      query: "",
      is_active: true,
      selectedClinic: "", // Adicione este campo para controlar a seleção
      ...initialValues,
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        marginTop: 15,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="descricao"
            disabled
            name="descricao"
            label="Descrição"
            type="string"
            value={formik.values.descricao}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="query"
            name="query"
            label="Query"
            multiline
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.query}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="is_active"
            name="is_active"
            label="Ativo"
            disabled
            type="boolean"
            value={formik.values.is_active}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="selectedClinic"
            name="selectedClinic"
            label="Clínica"
            select
            value={formik.values.selectedClinic || ""}
            onChange={formik.handleChange}
          >
            <MenuItem value="">
              <em>Selecione uma clínica</em>
            </MenuItem>
            <MenuItem value={"All"}>*** SELECIONAR TODAS ***</MenuItem>
            {clinics?.map((client) => (
              <MenuItem key={client.id_cliente} value={client.id_cliente}>
                {`${client.nome_fantasia}`}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Box mt={3} display="flex" justifyContent="center" gap={2}>
        <Button onClick={onCancel} color="secondary" variant="outlined">
          Cancelar
        </Button>
        <Button type="submit" variant="contained" color="warning">
          Executar
          <Icon type="play_arrow" />
        </Button>
      </Box>
    </form>
  );
};
