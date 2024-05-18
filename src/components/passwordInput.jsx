import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Ingrese su password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Ocultar' : 'Mostrar'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
