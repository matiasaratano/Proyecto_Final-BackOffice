import React from 'react';
import { Button } from '@chakra-ui/react';

const InicioButton = ({ onClick }) => (
  <Button bg="#6750A4" onClick={onClick} w="100%" color={'white'}>
    Inicio
  </Button>
);

export default InicioButton;
