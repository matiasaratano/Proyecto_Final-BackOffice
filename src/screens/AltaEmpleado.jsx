import React, { useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AltaButton from '../components/altaButton';
import CancelarButton from '../components/cancelarButton';

const AltaEmpleado = () => {
  const navigate = useNavigate();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCancelarClick = () => {
    navigate('/home');
  };

  const handleAltaClick = () => {
    const newEmployee = {
      fullName: nombreCompleto,
      email: email,
      userPassword: password,
      role: "usuario",
      bossId : null
    };

    fetch('http://172.20.97.65:8080/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Empleado agregado:', data);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Error al agregar empleado:', error);
      });
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
          <NombreCompletoControlledInput value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} />
          <EmailControlledInput value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordControlledInput value={password} onChange={(e) => setPassword(e.target.value)} />
          <AltaButton onClick={handleAltaClick}/>
          <CancelarButton onClick={handleCancelarClick} /> {}
        </VStack>
      </Box>
    </Box>
  );
};

export default AltaEmpleado;
