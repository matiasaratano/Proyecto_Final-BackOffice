import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import EmpleadosCard from '../components/empleadosCard';
import ViandasCard from '../components/viandasCard';
import ReportesCard from '../components/reportesCard';

const Home = () => {
  return (
    <Box minH="100vh" p={10} bg="#E8DEF8">
      <Heading as="h1" size="xl" textAlign="center" mb={100}>
        Menu Principal
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        spacing={0}
        justifyContent="center"
      >
        <EmpleadosCard />
        <ViandasCard />
        <ReportesCard />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
