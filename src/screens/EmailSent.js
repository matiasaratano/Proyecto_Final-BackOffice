import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
function EmailSent() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Correo electrónico enviado
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          A xxx@xxx.com se le ha enviado un correo electrónico. Por favor,
          verifica tus datos de inicio de sesión y regresa al inicio para
          completar el proceso.
        </Typography>
        <Button
          component={RouterLink}
          to="/login"
          variant="contained"
          color="primary"
        >
          Volver al inicio de sesión
        </Button>
      </Box>
    </Container>
  );
}

export default EmailSent;
