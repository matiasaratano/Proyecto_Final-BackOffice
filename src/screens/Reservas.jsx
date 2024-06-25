import React, { useEffect } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import ReservationTable from '../components/reservasTable';
import { useNavigate } from 'react-router-dom';
import BTMHeader from '../components/backToMenuHeader';
import ValidateTokenService from '../services/ValidationTokenService/ValidationTokenService.js';

const Reservas = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ValidateTokenService(navigate);
  }, [navigate]);

  return (
    <Box minH="100vh" bg="gray.50">
      <BTMHeader />
      <Box p={4} mt={2}>
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="semibold"
            textAlign="left"
            _hover={{
              bgGradient: 'linear(to-r, purple.400, purple.600)',
              bgClip: 'text',
              textShadow:
                '1 1 1px rgba(103, 80, 164, 1), 0 0 2px rgba(103, 80, 164, 1)',
            }}
          >
            Reservas
          </Heading>
        </Flex>
        <ReservationTable />
      </Box>
    </Box>
  );
};

export default Reservas;
