import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Grid } from "@mui/material";
import { IUser } from "../../../interfaces/user";

const validationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  password: yup.string(),
});

interface UserFormProps {
  initialValues: Partial<IUser>;
  onSubmit: (values: Partial<IUser>) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
  isEdit = false,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
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
            label="Nome do Usuário"
            type="string"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="string"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Senha"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
