import React, { useState } from "react";
import { Box, VStack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import IngresarButton from '../components/ingresarButton';
import RegistrarseButton from '../components/registrarseButton';
import OlvidastePasswordInput from '../components/olvidastePasswordInput';
import loginService from '../services/LoginService/LoginService.js';
import logo from '../assets/logobdt.png';
import '../styles/styles.css'; 
import '../styles/buttons.css'; 

const Login = () => {
  const navigate = useNavigate(); 
  
  const [login, setLogin] = useState({
    email: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    setLogin((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginResponse = await loginService(login);
    console.log("Respuesta de inicio de sesión: ", JSON.stringify(loginResponse));
    if (loginResponse.success) { // Asumiendo que loginService retorna un objeto con una propiedad 'success'
      navigate('/home');
    } else {
      // Manejar el error de inicio de sesión aquí, por ejemplo, mostrando un mensaje al usuario
      console.log("Error de inicio de sesión: ", loginResponse.message);
    }
  };

  const handleRegistrarseClick = () => {
    navigate('/registrar-usuario');
  };

  const handleOlvidastePasswordClick = () => {
    navigate('/contraseña-olvidada'); 
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
      <Box className="login-container" p={4} maxW="md" borderWidth={2} borderRadius="lg" overflow="hidden" boxShadow="lg" mx="auto">
        {/* Logo de la empresa */}
        <Image src={logo} alt="bdt-global" className="logo" mb={1} />

        {/* Campos de inicio de sesión */}
        <VStack spacing={4}>
          <Box w="100%">
            <EmailControlledInput name="email" value={login.email} onChange={handleChange} />
          </Box>
          
          <Box w="100%">
            <PasswordControlledInput name="userPassword" value={login.userPassword} onChange={handleChange} />
          </Box>

          {/* Botones */}
          <IngresarButton onClick={handleSubmit} w="100%" />
          <RegistrarseButton onClick={handleRegistrarseClick} w="100%" />
        </VStack>
        
        <Box mt={4} textAlign="center">
          <OlvidastePasswordInput onClick={handleOlvidastePasswordClick} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

