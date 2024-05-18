import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const ViandasCard = () => {
  const handleButtonClick = () => {
    window.location.href =
      'https://docs.google.com/forms/d/1Fg8y5X2N5_pO9exfUOqvMBWANSDSYgXwFW3Iqg3JvwY/edit#responses';
  };

  return (
    <Card
      align="center"
      p={4}
      maxW="md"
      borderWidth={2}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx="auto"
    >
      <CardHeader>
        <Heading size="md">Viandas</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Accede a las respuestas del formulario de viandas de los empleados.
        </Text>
      </CardBody>
      <CardFooter>
        <Button bg="#6750A4" color={'white'} onClick={handleButtonClick}>
          Respuestas
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ViandasCard;
