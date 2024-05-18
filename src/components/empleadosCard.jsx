import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

const EmpleadosCard = () => (
  <Card align="center" p={4} maxW="md" borderWidth={2} borderRadius="lg" overflow="hidden" boxShadow="lg" mx="auto">
    <CardHeader>
      <Heading size="md">Empleados</Heading>
    </CardHeader>
    <CardBody>
      <Text>Visualizar la información de todos los empleados actuales de BDT Global Argentina.</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme="purple">Ver aquí</Button>
    </CardFooter>
  </Card>
);

export default EmpleadosCard;
