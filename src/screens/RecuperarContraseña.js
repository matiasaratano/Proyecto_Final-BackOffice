import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from '@mui/material';

function RecuperarContraseña({ history }) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el correo electrónico para restablecer la contraseña
    console.log('Email:', email);
    // Redirige a la pantalla de éxito o muestra un mensaje de éxito aquí
    history.push('/recuperar-contraseña-exito');
  };

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
        <Typography component="h1" variant="h5">
          Recuperar Contraseña
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{ mt: 2, textAlign: 'center' }}
        >
          Por favor, introduce tu dirección de correo electrónico alternativo (o
          personal) a continuación para que podamos enviarte la información de
          inicio de sesión.
        </Typography>
        <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Link href="/login" variant="body2">
            Volver al inicio de sesión
          </Link>
        </form>
      </Box>
    </Container>
  );
}

export default RecuperarContraseña;
