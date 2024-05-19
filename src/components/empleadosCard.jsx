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
import { useNavigate } from 'react-router-dom';

const EmpleadosCard = () => {
  const navigate = useNavigate();

  const handleButtonAlta = () => {
    navigate('/alta-empleado');
  };

  const handleButtonModificar = () => {
    navigate('/modificar-empleado');
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
        <Heading size="md">Empleados</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          Visualizar la información de todos los empleados actuales de BDT
          Global Argentina o dar de alta uno nuevo.
        </Text>
      </CardBody>
      <CardFooter>
        <Button
          bg="#E8DEF8"
          color={'black'}
          marginRight={5}
          onClick={handleButtonModificar}
        >
          Ver-Modificar
        </Button>
        <Button bg="#6750A4" color={'white'} onClick={handleButtonAlta}>
          Alta Usuario
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EmpleadosCard;
