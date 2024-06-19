import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
  Input,
  Flex,
  Spacer,
} from '@chakra-ui/react';

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://172.20.97.65:8080/api/reserva/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setReservations(data.message);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (reservation) => {
    setSelectedReservation(reservation);
    onOpen();
  };

  const handleConfirmDelete = () => {
    if (selectedReservation) {
      fetch(`http://172.20.97.65:8080/api/reserva/${selectedReservation.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log(
              `Reserva con ID ${selectedReservation.id} eliminada correctamente`
            );
            // Actualizar la lista de reservas excluyendo la reserva eliminada
            setReservations((prevReservations) =>
              prevReservations.filter(
                (reserva) => reserva.id !== selectedReservation.id
              )
            );
          } else {
            console.error(
              'Error al intentar eliminar la reserva:',
              response.statusText
            );
          }
        })
        .catch((error) => {
          console.error('Error al intentar eliminar la reserva:', error);
        });

      onClose();
    }
  };

  const handleFilter = () => {
    if (!startDate || !endDate) {
      setError('Por favor selecciona ambas fechas.');
      return;
    }

    // Validar que la fecha de fin sea mayor que la fecha de inicio
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start >= end) {
      setError('La fecha de fin debe ser mayor que la fecha de inicio.');
      return;
    }

    // Aquí puedes realizar la lógica de filtrado según las fechas seleccionadas
    // Utiliza startDate y endDate para filtrar las reservas
  };

  return (
    <div>
      <Flex marginBottom="10px">
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          marginRight="5px"
          width={200}
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          marginRight="5px"
          width={200}
        />
        <Button colorScheme="blue" onClick={handleFilter}>
          Filtrar
        </Button>
        <Spacer />
      </Flex>
      {error && <Text color="red">{error}</Text>}
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
            <Tr
              key={reservation.id}
              bg={
                selectedReservation?.id === reservation.id ? '#6a4fa7' : 'white'
              }
              color={
                selectedReservation?.id === reservation.id ? 'white' : 'black'
              }
            >
              <Td>{reservation.fecha}</Td>
              <Td>{reservation.User.fullName}</Td>
              <Td>{reservation.User.email}</Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(reservation)}
                >
                  Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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
            <Button colorScheme="red" onClick={handleConfirmDelete}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReservationTable;
