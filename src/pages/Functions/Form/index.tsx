import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Grid } from "@mui/material";
import { IFunction } from "../../../interfaces/function";

const validationSchema = yup.object({
  descricao: yup.string().required("Descrição é obrigatória"),
  query: yup.string().required("Query é obrigatória"),
  is_active: yup.boolean().required("Status é obrigatório"),
});

interface FunctionFormProps {
  initialValues: Partial<IFunction>;
  onSubmit: (values: Partial<IFunction>) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const FunctionForm: React.FC<FunctionFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  isEdit = false,
}) => {
  const formik = useFormik({
    initialValues: {
      descricao: "",
      query: "",
      is_active: true,
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
            name="descricao"
            label="Descrição"
            type="string"
            value={formik.values.descricao}
            onChange={formik.handleChange}
            error={formik.touched.descricao && Boolean(formik.errors.descricao)}
            helperText={formik.touched.descricao && formik.errors.descricao}
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
            value={formik.values.query}
            onChange={formik.handleChange}
            error={formik.touched.query && Boolean(formik.errors.query)}
            helperText={formik.touched.query && formik.errors.query}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="is_active"
            name="is_active"
            label="Ativo"
            type="boolean"
            value={formik.values.is_active}
            onChange={formik.handleChange}
            error={formik.touched.is_active && Boolean(formik.errors.is_active)}
            helperText={formik.touched.is_active && formik.errors.is_active}
          />
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
