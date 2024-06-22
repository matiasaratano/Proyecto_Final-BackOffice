import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const PasswordControlledInput = ({name, value, onChange }) => {
  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left" color={'#6a4fa7'} fontWeight={'bold'}>
        Contraseña:
      </Text>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Ingrese su contraseña"
        size="md"
        type="password"
        focusBorderColor="#6750A4"
      />
    </Box>
  );
};

export default PasswordControlledInput;
