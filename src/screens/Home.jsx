import React, { useState } from 'react';
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

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleLogout = () => {
    // Redirecciono al usuario a la página de login
    window.location.href = '/login';
  };

  return (
    <Box
      minH="100vh"
      bgImage="url('https://img.freepik.com/foto-gratis/resumen-antecedentes-cemento-pared-sombra-concepto-luz_53876-147612.jpg?t=st=1718482244~exp=1718485844~hmac=a7b0444ce3a97e3d3fb402c2ddb3317ff4a501872e48362275f2a014704611fa&w=1380')"
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
            opacity={0.8}
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
            opacity={0.8}
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
            opacity={0.8}
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
