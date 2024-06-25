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
  Input,
  Flex,
  Spacer,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

const ReservationTable = () => {
  const token = localStorage.getItem('token');
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBulkDelete, setIsBulkDelete] = useState(false);
  const [error, setError] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    fetchReservations();
    // eslint-disable-next-line
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/reserva/all', {
        headers: {
          'Content-Type': 'application/json',
          Token: token,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setReservations(data.message);
      setFilteredReservations(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error al cargar las reservas.');
    }
  };

  const handleDelete = (reservation) => {
    setSelectedReservation(reservation);
    setIsBulkDelete(false);
    onOpen();
  };

  const handleConfirmDelete = () => {
    if (selectedReservation) {
      fetch(
        `http://localhost:8080/api/reserva/admin/${selectedReservation.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Token: token,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log(
              `Reserva con ID ${selectedReservation.id} eliminada correctamente`
            );
            setReservations((prevReservations) =>
              prevReservations.filter(
                (reserva) => reserva.id !== selectedReservation.id
              )
            );
            setFilteredReservations((prevFilteredReservations) =>
              prevFilteredReservations.filter(
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

  const handleConfirmBulkDelete = async () => {
    try {
      for (const reservation of filteredReservations) {
        await fetch(
          `http://localhost:8080/api/reserva/admin/${reservation.id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Token: token,
            },
            body: JSON.stringify({ reason }),
          }
        );
      }
      setReservations((prevReservations) =>
        prevReservations.filter(
          (reserva) =>
            !filteredReservations.some((filtered) => filtered.id === reserva.id)
        )
      );
      setFilteredReservations([]);
    } catch (error) {
      console.error('Error al intentar eliminar todas las reservas:', error);
    } finally {
      onClose();
    }
  };

  const handleCancelAll = () => {
    setIsBulkDelete(true);
    setReason('');
    onOpen();
  };

  const handleFilter = () => {
    try {
      if (!startDate || !endDate) {
        setError('Por favor, selecciona las fechas de inicio y fin.');
        return;
      }

      const filtered = reservations.filter((reservation) => {
        const reservationDate = new Date(reservation.fecha);
        return (
          reservationDate >= new Date(startDate) &&
          reservationDate <= new Date(endDate)
        );
      });

      setFilteredReservations(filtered);
    } catch (error) {
      console.error('Error filtering reservas:', error);
      setError('Error al filtrar las reservas.');
    }
  };

  const togglePresence = (reservation) => {
    const updatedPresence = !reservation.presente;

    fetch(`http://localhost:8080/api/reserva/update/${reservation.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Token: token,
      },
      body: JSON.stringify({ presente: updatedPresence }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setReservations((prevReservations) =>
            prevReservations.map((reserva) =>
              reserva.id === reservation.id
                ? { ...reserva, presente: updatedPresence }
                : reserva
            )
          );
          setFilteredReservations((prevFilteredReservations) =>
            prevFilteredReservations.map((reserva) =>
              reserva.id === reservation.id
                ? { ...reserva, presente: updatedPresence }
                : reserva
            )
          );
        } else {
          console.error(
            'Error al intentar actualizar el estado de presencia:',
            data.message
          );
        }
      })
      .catch((error) => {
        console.error(
          'Error al intentar actualizar el estado de presencia:',
          error
        );
      });
  };

  const handleAccept = () => {
    if (isBulkDelete) {
      handleConfirmBulkDelete();
    } else {
      handleConfirmDelete();
    }
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
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
        <Button colorScheme="red" onClick={handleCancelAll}>
          Cancelar todas las reservas
        </Button>
      </Flex>
      {error && <Text color="red">{error}</Text>}
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Empleado</Th>
            <Th>Email</Th>
            <Th>Presencia del empleado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredReservations.map((reservation) => (
            <Tr key={reservation.id}>
              <Td>{reservation.fecha}</Td>
              <Td>{reservation.User?.fullName || 'N/A'}</Td>
              <Td>{reservation.User?.email || 'N/A'}</Td>
              <Td>
                <Button
                  colorScheme={reservation.presente ? 'green' : 'orange'}
                  onClick={() => togglePresence(reservation)}
                >
                  {reservation.presente ? 'Presente' : 'Ausente'}
                </Button>
              </Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={() => handleDelete(reservation)}
                >
                  Cancelar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isBulkDelete ? 'Motivo de la Cancelación' : 'Confirmación'}
          </ModalHeader>
          <ModalBody>
            {isBulkDelete ? (
              <Textarea
                value={reason}
                onChange={handleReasonChange}
                placeholder="Escriba el motivo"
                size="sm"
              />
            ) : (
              <Text>¿Estás seguro/a de que quieres eliminar esta reserva?</Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleAccept}>
              {isBulkDelete ? 'Aceptar' : 'Confirmar'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReservationTable;
