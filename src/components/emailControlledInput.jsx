import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const EmailControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left" color={'#6a4fa7'} fontWeight={'bold'}>
        Correo electrónico
      </Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Ingrese su correo electrónico"
        size="md"
        focusBorderColor="#6750A4"
        errorBorderColor="red.500"
      />
    </Box>
  );
};

export default EmailControlledInput;
