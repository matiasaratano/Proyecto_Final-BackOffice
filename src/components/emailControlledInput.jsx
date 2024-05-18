import React from 'react';
import { Input, Text, Box } from '@chakra-ui/react';

const EmailControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box w="100%">
      <Text mb='8px' textAlign="left">Email:</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Ingrese su email'
        size='md'
      />
    </Box>
  );
};

export default EmailControlledInput;
