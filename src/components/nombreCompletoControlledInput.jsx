import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const NombreCompletoControlledInput = ({ name, value, onChange }) => {
  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left" color={'#6a4fa7'} fontWeight={'bold'}>
        Nombre Completo:
      </Text>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Ingrese su nombre completo"
        size="md"
        type="text"
        focusBorderColor="#6750A4"
      />
    </Box>
  );
};

export default NombreCompletoControlledInput;
