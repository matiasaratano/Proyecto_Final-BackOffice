import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import EnviarButton from '../components/enviarButton';
import CancelarButton from '../components/cancelarButton';

const ContraseñaOlvidada = () => {
  const navigate = useNavigate();

  const handleCancelarClick = () => {
    navigate('/login');
  };

  const handleEnviarClick = () => {
    navigate('/email-recuperacion');
  };

  return (
    <Box
      minH="100vh"
      p={10}
      bg="#E8DEF8"
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
          <Text>
            Por favor, introduce tu dirección de correo electrónico alternativo
            (o personal) a continuación para que podamos enviarte la información
            de inicio de sesión.
          </Text>
          <EmailControlledInput />
          <EnviarButton onClick={handleEnviarClick} />
          <CancelarButton onClick={handleCancelarClick} />
        </VStack>
      </Box>
    </Box>
  );
};

export default ContraseñaOlvidada;
