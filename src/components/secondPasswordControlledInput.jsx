import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const SecondPasswordControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box w="100%">
      <Text mb='8px' textAlign="left">Repita la password:</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Ingrese su contraseña'
        size='md'
        type="password"
      />
    </Box>
  );
};

export default SecondPasswordControlledInput;
