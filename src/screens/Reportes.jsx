import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Select,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from '@chakra-ui/react';
import BTMHeader from '../components/backToMenuHeader';
import { useNavigate } from 'react-router-dom';
import ValidateTokenService from '../services/ValidationTokenService/ValidationTokenService.js';

const Reportes = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [reporte, setReporte] = useState(null);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState('');

  const handleMesChange = (event) => {
    setMes(event.target.value);
    setValidationError(''); // Clear validation error on change
  };

  const handleAnioChange = (event) => {
    setAnio(event.target.value);
    setValidationError(''); // Clear validation error on change
  };

  const generarReporte = async () => {
    if (mes && anio) {
      try {
        const response = await fetch(
          `http://localhost:8080/api/report/${mes}/${anio}`,
          {
            headers: {
              Token: token,
            },
          }
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Error al generar el reporte');
        }

        setReporte(data.message);
        setError(null);
      } catch (error) {
        console.error('Error al generar el reporte:', error);
        setError(error.message);
        setReporte(null);
      }
    } else {
      setValidationError('Por favor selecciona mes y año.');
    }
  };

  useEffect(() => {
    ValidateTokenService(navigate);
  }, [navigate]);

  return (
    <Box minH="100vh" bg="gray.50">
      <BTMHeader />
      <Box p={4}>
        <Heading mb={4}>Reporte</Heading>
        <Flex align="center" mb={4}>
          <Select
            placeholder="Mes"
            value={mes}
            onChange={handleMesChange}
            width="200px"
            mr={2}
          >
            <option value="01">Enero</option>
            <option value="02">Febrero</option>
            <option value="03">Marzo</option>
            <option value="04">Abril</option>
            <option value="05">Mayo</option>
            <option value="06">Junio</option>
            <option value="07">Julio</option>
            <option value="08">Agosto</option>
            <option value="09">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </Select>
          <Select
            placeholder="Año"
            value={anio}
            onChange={handleAnioChange}
            width="200px"
            mr={2}
          >
            {Array.from(
              { length: 10 },
              (_, i) => new Date().getFullYear() - i
            ).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
          <Button colorScheme="teal" onClick={generarReporte} size="md">
            Generar Reporte
          </Button>
        </Flex>

        {validationError && <Text color="red">{validationError}</Text>}
        {error && <Box color="red">{error}</Box>}

        {reporte && (
          <Table variant="simple" mt={4}>
            <Thead>
              <Tr>
                <Th>Nombre Completo</Th>
                <Th isNumeric>Presentismo</Th>
                <Th isNumeric>Número de Reservas</Th>
                <Th isNumeric>Número de Ausentes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {reporte.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.userFullName}</Td>
                  <Td isNumeric>{item.presentismo}%</Td>
                  <Td isNumeric>{item.numReservas}</Td>
                  <Td isNumeric>{item.numAusentes}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </Box>
  );
};

export default Reportes;
