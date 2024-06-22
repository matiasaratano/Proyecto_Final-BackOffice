import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import SecondPasswordControlledInput from '../components/secondPasswordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AreaControlledInput from '../components/areaControlledInput';
import RegistrarseButton from '../components/registrarseButton';
import CancelarButton from '../components/cancelarButton';
import registerService from '../services/RegisterService/RegisterService.js';
import loginService from '../services/LoginService/LoginService.js'; // Asegúrate de importar loginService

const RegistrarUsuario = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    userPassword: "",
    role: "",
  });

  const handleChange = (event) => {
    setRegister((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const registerResponse = await registerService(register);
    if (registerResponse.success) {
      // Utiliza loginService después de un registro exitoso
      const loginResponse = await loginService({ email: register.email, userPassword: register.userPassword });
      if (loginResponse.success) {
        navigate('/home');
      } else {
        console.log("Error de inicio de sesión: ", loginResponse.message);
        // Aquí podrías redirigir a la página de login o mostrar un mensaje de error
      }
    } else {
      console.log("Error de registro: ", registerResponse.message);
    }
  };

  const handleCancelarClick = () => {
    navigate('/login');
  };

  return (
    <Box
      minH="100vh"
      p={10}
      bg="#6750A4"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={8}
        maxW="lg"
        borderWidth={2}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        w="full"
      >
        <VStack spacing={8} w="full" maxW="lg">
          <EmailControlledInput name="email" value={register.email} onChange={handleChange} />
          <PasswordControlledInput name="userPassword" value={register.userPassword} onChange={handleChange} />
          <SecondPasswordControlledInput name="confirmPassword" value={register.confirmPassword} onChange={handleChange} />
          <NombreCompletoControlledInput name="fullName" value={register.fullName} onChange={handleChange} />
          <AreaControlledInput name="role" value={register.role} onChange={handleChange} />
          <RegistrarseButton onClick={handleSubmit} />
          <CancelarButton onClick={handleCancelarClick} />
        </VStack>
      </Box>
    </Box>
  );
};

export default RegistrarUsuario;