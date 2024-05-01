import React, { useState } from 'react';
import { Container, TextField, Button, Box, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Importa el logo
import Logo from '../assets/logobdt.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Username:', username);
    console.log('Password:', password);
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
        {/* Utiliza el componente Avatar con la imagen del logo */}
        <Avatar src={Logo} sx={{ m: 1, width: 300, height: 300 }}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Login Backoffice
        </Typography> */}
        <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de Usuario"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
