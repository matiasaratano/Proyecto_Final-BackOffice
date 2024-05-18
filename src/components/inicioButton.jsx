import React from 'react';
import { Button } from '@chakra-ui/react';

const InicioButton = ({ onClick }) => (
  <Button colorScheme="purple" onClick={onClick} w="100%">
    Inicio
  </Button>
);

export default InicioButton;
