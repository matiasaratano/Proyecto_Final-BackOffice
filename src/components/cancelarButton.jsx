import React from 'react';
import { Button } from '@chakra-ui/react';

const CancelarButton = ({ onClick }) => (
  <Button colorScheme="red" variant="outline" w="100%" onClick={onClick}>
    Cancelar
  </Button>
);

export default CancelarButton;
