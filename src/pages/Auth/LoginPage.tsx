import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Container
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const LoginPage: React.FC = () => {
  const { login, user } = useAuth();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setError('');
      
      const success = await login(values.email, values.password);
      
      if (!success) {
        setError('Invalid email or password');
      }
      
      setIsLoading(false);
    },
  });

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Background Image Side */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'block' },
        }}
      />
      
      {/* Login Form Side */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
              Welcome Back
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
              Sign in to access your dashboard
            </Typography>

            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%' }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
                autoComplete="email"
                autoFocus
              />
              
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Demo credentials: admin@example.com / password123
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;