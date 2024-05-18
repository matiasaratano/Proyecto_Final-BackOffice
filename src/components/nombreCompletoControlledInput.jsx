import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const NombreCompletoControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box w="100%">
      <Text mb="8px" textAlign="left">Nombre Completo:</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Ingrese su nombre completo"
        size="md"
      />
    </Box>
  );
};

export default NombreCompletoControlledInput;
