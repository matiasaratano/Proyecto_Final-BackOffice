import React from 'react';
import { Box, VStack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import IngresarButton from '../components/ingresarButton';
import RegistrarseButton from '../components/registrarseButton';
import OlvidastePasswordInput from '../components/olvidastePasswordInput';
import logo from '../assets/logobdt.png';
import '../styles/styles.css'; 
import '../styles/buttons.css'; 

const Login = () => {
  const navigate = useNavigate(); 

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
            <EmailControlledInput />
          </Box>
          
          <Box w="100%">
            <PasswordControlledInput />
          </Box>

          {/* Botones */}
          <IngresarButton w="100%" />
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

