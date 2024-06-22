import React, { useState } from 'react';
import {
  Box,
  VStack,
  Image,
  Text,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import IngresarButton from '../components/ingresarButton';
import RegistrarseButton from '../components/registrarseButton';
// import OlvidastePasswordInput from '../components/olvidastePasswordInput';
import loginService from '../services/LoginService/LoginService.js';
import logo from '../assets/logobdt.png';
import '../styles/styles.css';
import '../styles/buttons.css';

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    userPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    userPassword: '',
    general: '',
  });

  const handleChange = (event) => {
    setLogin((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
    setErrors({ ...errors, general: '' }); // Clear general error message on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginResponse = await loginService(login);
      console.log(
        'Respuesta de inicio de sesión: ',
        JSON.stringify(loginResponse)
      );
      if (loginResponse.success) {
        navigate('/home');
      } else {
        // Manejar el error de inicio de sesión aquí, por ejemplo, mostrando un mensaje al usuario
        setErrors({ ...errors, general: loginResponse.message });
      }
    } catch (error) {
      console.error('Error de inicio de sesión: ', error);
      setErrors({ ...errors, general: 'Email o password incorrecta' });
    }
  };

  const handleRegistrarseClick = () => {
    navigate('/registrar-usuario');
  };

  // const handleOlvidastePasswordClick = () => {
  //   navigate('/contraseña-olvidada');
  // };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Box
        className="login-container"
        p={4}
        maxW="md"
        borderWidth={2}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        mx="auto"
      >
        {/* Logo de la empresa */}
        <Image src={logo} alt="bdt-global" className="logo" mb={1} />

        {/* Campos de inicio de sesión */}
        <VStack spacing={4}>
          <Box w="100%">
            <FormControl isInvalid={errors.email}>
              <EmailControlledInput
                name="email"
                value={login.email}
                onChange={handleChange}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>
          </Box>

          <Box w="100%">
            <FormControl isInvalid={errors.userPassword}>
              <PasswordControlledInput
                name="userPassword"
                value={login.userPassword}
                onChange={handleChange}
              />
              {errors.userPassword && (
                <FormErrorMessage>{errors.userPassword}</FormErrorMessage>
              )}
            </FormControl>
          </Box>

          {/* Botones */}
          <IngresarButton onClick={handleSubmit} w="100%" />
          <RegistrarseButton onClick={handleRegistrarseClick} w="100%" />
        </VStack>

        {errors.general && (
          <Box mt={4} textAlign="center">
            <Text color="red.500">{errors.general}</Text>
          </Box>
        )}

        {/* <Box mt={4} textAlign="center">
          <OlvidastePasswordInput onClick={handleOlvidastePasswordClick} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Login;
