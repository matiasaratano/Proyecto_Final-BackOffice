import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

const OlvidastePasswordInput = ({ onClick }) => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Button colorScheme="teal" variant="link" w="100%" onClick={onClick}>
        ¿Olvidaste tu contraseña?
      </Button>
    </Stack>
  );
};

export default OlvidastePasswordInput;
