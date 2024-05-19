import React from 'react';
import { Button } from '@chakra-ui/react';

const altaButton = ({ onClick }) => (
  <Button bg="#E8DEF8" color="black" onClick={onClick} w="100%">
    Alta Usuario
  </Button>
);

export default altaButton;
