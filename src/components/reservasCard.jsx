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
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const ReservasCard = () => {
  const navigate = useNavigate();

  const handleButtonReservas = () => {
    navigate('/reservas');
  };

  const handleButtonViandas = () => {
    window.location.href =
      'https://docs.google.com/forms/d/1Fg8y5X2N5_pO9exfUOqvMBWANSDSYgXwFW3Iqg3JvwY/edit#responses';
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
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img
            src="https://img.freepik.com/fotos-premium/calendario-nombramiento-asamblea-accionistas_1048944-15737431.jpg?w=1380"
            alt="Calendario"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/pluma-explotacion-mano-primer-plano_23-2148484639.jpg?t=st=1718479167~exp=1718482767~hmac=92924c17449bbd39f817963d80c3b2eb49f158cefc130253ff3dc5ca3a1247bd&w=1380"
            alt="Viandas"
          />
        </div>
      </Carousel>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Reservas</Heading>
          <Text>
            Accede a las reservas o solicitudes de viandas de los empleados.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="teal"
            onClick={handleButtonReservas}
          >
            Reservas
          </Button>
          <Button
            variant="solid"
            colorScheme="purple"
            onClick={handleButtonViandas}
          >
            Viandas
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ReservasCard;
