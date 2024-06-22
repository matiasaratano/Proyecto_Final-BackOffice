import React from 'react';
import { Button } from '@chakra-ui/react';

const IngresarButton = ({ onClick }) => {
  return (
    <Button w="100%" bg="#6750A4" color="white" onClick={onClick}>
      Ingresar
    </Button>
  );
};

export default IngresarButton;