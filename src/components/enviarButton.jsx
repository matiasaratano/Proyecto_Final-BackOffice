import React from 'react';
import { Button } from '@chakra-ui/react';

const EnviarButton = ({ onClick }) => (
  <Button bg="#6750A4" w="100%" onClick={onClick} color={'white'}>
    Enviar
  </Button>
);

export default EnviarButton;
