import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const NombreCompletoControlledInput = ({ value, onChange }) => {
  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left" color={'#6a4fa7'} fontWeight={'bold'}>
        Nombre Completo:
      </Text>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Ingrese su nombre completo"
        size="md"
        focusBorderColor="#6750A4"
      />
    </Box>
  );
};

export default NombreCompletoControlledInput;
