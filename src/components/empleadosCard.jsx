import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Stack,
  Divider,
  ButtonGroup,
  Image,
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
      maxW="sm"
      borderWidth={2}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx="auto"
    >
      <Image
        src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Empleados"
        borderRadius="lg"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Empleados</Heading>
          <Text>
            Visualizar la información de los empleados actuales de BDT Global o
            dar de alta uno nuevo.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="purple"
            onClick={handleButtonModificar}
          >
            Ver/Modificar
          </Button>
          <Button variant="solid" colorScheme="teal" onClick={handleButtonAlta}>
            Alta Usuario
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default EmpleadosCard;
