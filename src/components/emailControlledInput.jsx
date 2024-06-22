import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const EmailControlledInput = ({name, value, onChange }) => {
  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left" color={'#6a4fa7'} fontWeight={'bold'}>
        Email:
      </Text>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Ingrese su email"
        size="md"
        focusBorderColor="#6750A4"
      />
    </Box>
  );
};

export default EmailControlledInput;
