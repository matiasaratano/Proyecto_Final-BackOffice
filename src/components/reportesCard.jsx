import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

const ReportesCard = () => (
  <Card align="center"  p={4} maxW="md" borderWidth={2} borderRadius="lg" overflow="hidden" boxShadow="lg" mx="auto">
    <CardHeader>
      <Heading size="md">Reportes</Heading>
    </CardHeader>
    <CardBody>
      <Text>Visualizar el reporte de los empleados actuales de BDT Global Argentina.</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme="purple">Ver aquí</Button>
    </CardFooter>
  </Card>
);

export default ReportesCard;
