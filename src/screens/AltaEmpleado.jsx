import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AltaButton from '../components/altaButton';
import CancelarButton from '../components/cancelarButton';

const AltaEmpleado = () => {
  const navigate = useNavigate();

  const handleCancelarClick = () => {
    navigate('/home');
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
          <NombreCompletoControlledInput />
          <EmailControlledInput />
          <PasswordControlledInput />
          <AltaButton />
          <CancelarButton onClick={handleCancelarClick} /> {}
        </VStack>
      </Box>
    </Box>
  );
};

export default AltaEmpleado;
