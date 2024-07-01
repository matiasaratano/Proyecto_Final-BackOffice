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
  Image,
  ButtonGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const ReportesCard = () => {
  const navigate = useNavigate();

  const handleButtonReportes = () => {
    navigate('/reportes');
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
        src="https://img.freepik.com/foto-gratis/concepto-estrategia-estadisticas-informe-informacion-datos_53876-124952.jpg?t=st=1718479503~exp=1718483103~hmac=1f079eff3fb31c5cd14dbf257d22e333aa517f44c65fea5e1e16e07d3373183d&w=996"
        alt="Reportes"
        borderRadius="lg"
        height="255px"
        width="100%"
        objectFit="cover"
      />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">Reportes</Heading>
          <Text>
            Visualizar el reporte de los empleados actuales de BDT Global
            Argentina.
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="purple"
            onClick={handleButtonReportes}
          >
            Ver aquí
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ReportesCard;
