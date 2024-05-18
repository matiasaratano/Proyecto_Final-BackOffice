import React from 'react';
import { Box, VStack, Text, Card, CardBody } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import InicioButton from '../components/inicioButton';

const EmailRecuperacionEnviado = () => {
  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/login');
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
          <Card>
            <CardBody>
              <Text>
                Correo electrónico enviado a xxx@xxx.com. Por favor, verifica
                tus datos de inicio de sesión y regresa al inicio para completar
                el proceso.
              </Text>
            </CardBody>
          </Card>
          <InicioButton onClick={handleInicioClick} />
        </VStack>
      </Box>
    </Box>
  );
};

export default EmailRecuperacionEnviado;
