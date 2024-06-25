import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import EmpleadosCard from '../components/empleadosCard';
import ReservasCard from '../components/reservasCard';
import ReportesCard from '../components/reportesCard';
import Header from '../components/header';
import CerrarSesion from '../components/logoutButton';
import ValidateTokenService from '../services/ValidationTokenService/ValidationTokenService.js';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    ValidateTokenService(navigate);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate('/login'); 
  };

  return (
    <Box
      minH="100vh"
      bgImage="url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Header />
      <Box p={10}>
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          spacing={10}
          justifyContent="center"
        >
          <Box
            p={6}
            borderRadius="lg"
            opacity={0.9}
            transition="opacity 0.3s ease, transform 0.3s ease"
            _hover={{
              opacity: 1,
              transform: 'scale(1.05)',
            }}
          >
            <EmpleadosCard />
          </Box>
          <Box
            p={6}
            borderRadius="lg"
            opacity={0.9}
            transition="opacity 0.3s ease, transform 0.3s ease"
            _hover={{
              opacity: 1,
              transform: 'scale(1.05)',
            }}
          >
            <ReservasCard />
          </Box>
          <Box
            p={6}
            borderRadius="lg"
            opacity={0.9}
            transition="opacity 0.3s ease, transform 0.3s ease"
            _hover={{
              opacity: 1,
              transform: 'scale(1.05)',
            }}
          >
            <ReportesCard />
          </Box>
        </SimpleGrid>
      </Box>

      {/* Modal de confirmación para cerrar sesión */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro/a de que quieres cerrar sesión?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleLogout}>
              Salir
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Botón de Cerrar Sesión en la esquina superior derecha */}
      <Box position="absolute" top="4" right="4">
        <CerrarSesion onClick={onOpen} />
      </Box>
    </Box>
  );
};

export default Home;
