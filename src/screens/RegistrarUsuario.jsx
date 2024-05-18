import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; 
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import SecondPasswordControlledInput from '../components/secondPasswordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AreaControlledInput from '../components/areaControlledInput';
import RegistrarseButton from '../components/registrarseButton';
import CancelarButton from '../components/cancelarButton';  

const RegistrarUsuario = () => {
  const navigate = useNavigate(); 

  const handleCancelarClick = () => {
    navigate('/login'); 
  };

  return (
    <Box minH="100vh" p={10} bg="purple.100" display="flex" justifyContent="center" alignItems="center">
      <Box p={8} maxW="lg" borderWidth={2} borderRadius="lg" boxShadow="xl" bg="white" w="full">
        <VStack spacing={8} w="full" maxW="lg">
          <EmailControlledInput />
          <PasswordControlledInput />
          <SecondPasswordControlledInput />
          <NombreCompletoControlledInput />
          <AreaControlledInput />
          <RegistrarseButton />
          <CancelarButton onClick={handleCancelarClick} /> {}
        </VStack>
      </Box>
    </Box>
  );
};

export default RegistrarUsuario;
