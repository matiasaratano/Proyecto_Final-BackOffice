import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import EmployeeTable from '../components/tablaEmpleados';
import BTMHeader from '../components/backToMenuHeader'; 

const ModificarEmpleado = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <BTMHeader /> 
      <Box p={4} mt={2}> 
        <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
          fontWeight="semibold"
          textAlign="left"
          _hover={{
            bgGradient: 'linear(to-r, purple.400, purple.600)',
            bgClip: 'text',
            textShadow: '1 1 1px rgba(103, 80, 164, 1), 0 0 2px rgba(103, 80, 164, 1)',
          }}>
          Gestión de Empleados
        </Heading>
        <EmployeeTable />
      </Box>
    </Box>
  );
};

export default ModificarEmpleado;
