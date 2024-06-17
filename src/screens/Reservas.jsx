import React, { useState } from 'react';
import { Box, Heading, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea, Flex } from '@chakra-ui/react';
import ReservationTable from '../components/reservasTable';
import BTMHeader from '../components/backToMenuHeader';

const Reservas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState('');

  const handleCancelAll = () => {
    setStep(1);
    onOpen();
  };

  const handleAccept = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Aca va la lógica para eliminar todas las reservas
      console.log('Eliminando todas las reservas');
      onClose();
    }
  };

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <BTMHeader />
      <Box p={4} mt={2}> 
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
            fontWeight="semibold"
            textAlign="left"
            _hover={{
              bgGradient: 'linear(to-r, purple.400, purple.600)',
              bgClip: 'text',
              textShadow: '1 1 1px rgba(103, 80, 164, 1), 0 0 2px rgba(103, 80, 164, 1)',
            }}>
            Reservas existentes
          </Heading>
          <Button colorScheme="red" onClick={handleCancelAll}>
            Cancelar todas las reservas
          </Button>
        </Flex>
        <ReservationTable />
        
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {step === 1 ? 'Cancelar todas las reservas' : 'Confirmación'}
            </ModalHeader>
            <ModalBody>
              {step === 1 ? (
                <Textarea
                  value={reason}
                  onChange={handleChange}
                  placeholder="Escriba el motivo"
                  size="sm"
                />
              ) : (
                '¿Estas seguro/a de que quieres eliminar todas las reservas?'
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleAccept}>
                Aceptar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Reservas;
