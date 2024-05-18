import React from 'react';
import { Button } from '@chakra-ui/react';

const EnviarButton = ({ onClick }) => (
  <Button colorScheme="purple" w="100%" onClick={onClick}>
    Enviar
  </Button>
);

export default EnviarButton;
