import React from 'react';
import { Button } from '@chakra-ui/react';

const CerrarSesion = ({ onClick }) => (
  <Button colorScheme="red" variant="outline" w="100%" onClick={onClick}>
    Cerrar Sesion
  </Button>
);

export default CerrarSesion;
