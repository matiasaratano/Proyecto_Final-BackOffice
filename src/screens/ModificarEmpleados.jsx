import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import EmployeeTable from '../components/tablaEmpleados';

const ModificarEmpleado = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={6}>
        Gestión de Empleados
      </Heading>
      <EmployeeTable />
    </Box>
  );
};

export default ModificarEmpleado;
