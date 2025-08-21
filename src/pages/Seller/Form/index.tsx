import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Grid } from "@mui/material";
import { ISeller } from "../../../interfaces/seller";

const validationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
});

interface SellerFormProps {
  initialValues: Partial<ISeller>;
  onSubmit: (values: Partial<ISeller>) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const SellerForm: React.FC<SellerFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  isEdit = false,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
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
            id="name"
            name="name"
            label="Nome do Vendedor"
            type="string"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
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
