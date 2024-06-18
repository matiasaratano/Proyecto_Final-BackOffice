import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, useDisclosure } from '@chakra-ui/react';


const reservations = [
  { id: 1, fecha: '15/06/24', empleado: { nombre: 'Juan Pérez', email: 'juan@example.com' }, acciones: 'Eliminar' },
  { id: 2, fecha: '16/06/24', empleado: { nombre: 'María García', email: 'maria@example.com' }, acciones: 'Eliminar' },
  { id: 3, fecha: '18/06/24', empleado: { nombre: 'Kevin Martinez', email: 'kevin@example.com' }, acciones: 'Eliminar' },
  { id: 4, fecha: '19/06/24', empleado: { nombre: 'Nicolas Lopez', email: 'nicolas@example.com' }, acciones: 'Eliminar' },
  // Reservas de ejemplo para probar funcionalidad logica
];

const ReservationTable = () => {
  const [selectedReservation, setSelectedReservation] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = (reservation) => {
    setSelectedReservation(reservation);
    onOpen();
  };

  const confirmDelete = () => {
    // Aca se implementaría la lógica real para eliminar la reserva
    console.log(`Eliminando reserva con id ${selectedReservation.id}`);
    onClose();
  };

  return (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Fecha</Th>
          <Th>Empleado</Th>
          <Th>Email</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {reservations.map((reservation) => (
          <Tr key={reservation.id} bg={selectedReservation?.id === reservation.id ? "#6a4fa7" : "white"} color={selectedReservation?.id === reservation.id ? "white" : "black"}>
            <Td>{reservation.fecha}</Td>
            <Td>{reservation.empleado.nombre}</Td>
            <Td>{reservation.empleado.email}</Td>
            <Td>
              <Button colorScheme="red" onClick={() => handleDelete(reservation)}>
                Eliminar
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro/a de que quieres eliminar esta reserva?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={confirmDelete}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Table>
  );
};

export default ReservationTable;
