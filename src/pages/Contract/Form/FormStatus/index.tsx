import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Grid, MenuItem } from "@mui/material";
import { IStatusCategory } from "../../../../interfaces/contract";

const statusOptions = [
  "UPSELL",
  "NOVO",
  "CONVERTIDO",
  "EM NEGOCIACAO",
  "CANCELADO",
  "DESTRATADO",
];
const categoryOptions = ["CONTRATO", "UPGRADE", "LEAD"];

const validationSchema = yup.object({
  status: yup.string().oneOf(statusOptions).required("Status é obrigatório"),
  categoria: yup
    .string()
    .oneOf(categoryOptions)
    .required("Categoria é obrigatória"),
});

interface FormStatusProps {
  initialValues: IStatusCategory;
  onSubmit: (values: IStatusCategory) => void;
  onCancel: () => void;
}

export const FormStatus: React.FC<FormStatusProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginTop: 15 }}>
      <Grid container spacing={2}>
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
            {categoryOptions.map((option) => (
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
          Salvar
        </Button>
      </Box>
    </form>
  );
};
