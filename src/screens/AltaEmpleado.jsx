import React, { useState } from 'react';
import {
  Box,
  VStack,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AltaButton from '../components/altaButton';
import CancelarButton from '../components/cancelarButton';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

const AltaEmpleado = () => {
  const navigate = useNavigate();
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [errors, setErrors] = useState({});
  const {
    isOpen: isConfirmationOpen,
    onOpen: onConfirmationOpen,
    onClose: onConfirmationClose,
  } = useDisclosure();
  const {
    isOpen: isResultOpen,
    onOpen: onResultOpen,
    onClose: onResultClose,
  } = useDisclosure();
  const [resultMessage, setResultMessage] = useState('');

  const handleCancelarClick = () => {
    navigate('/home');
  };

  const validateFields = () => {
    const newErrors = {};
    if (!nombreCompleto)
      newErrors.nombreCompleto = 'El campo no puede estar vacío';
    if (!email) {
      newErrors.email = 'El campo no puede estar vacío';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!password) newErrors.password = 'El campo no puede estar vacío';
    if (!rol) newErrors.rol = 'Debes seleccionar un rol';
    return newErrors;
  };

  const handleAltaClick = () => {
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onConfirmationOpen();
    }
  };

  const confirmAlta = () => {
    console.log('dando de alta usuario nuevo..');
    const newEmployee = {
      fullName: nombreCompleto,
      email: email,
      userPassword: password,
      role: rol,
      bossId: null,
    };

    fetch('http://localhost:8080/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResultMessage('Alta de usuario realizada correctamente.');
        } else {
          setResultMessage('Error al crear el usuario: ' + data.message);
        }
        onResultOpen();
      })
      .catch((error) => {
        console.error('Error al agregar empleado:', error);
        setResultMessage('Error al crear el usuario: ' + error.message);
        onResultOpen();
      });

    onConfirmationClose();
  };

  const handleResultClose = () => {
    onResultClose();
    navigate('/home');
  };

  return (
    <Box
      minH="100vh"
      p={10}
      bg="#6750A4"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={8}
        maxW="lg"
        borderWidth={2}
        borderRadius="lg"
        boxShadow="xl"
        bg="white"
        w="full"
      >
        <VStack spacing={8} w="full" maxW="lg">
          <FormControl isInvalid={errors.nombreCompleto}>
            <NombreCompletoControlledInput
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
            />
            {errors.nombreCompleto && (
              <FormErrorMessage>{errors.nombreCompleto}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <EmailControlledInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <PasswordControlledInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.rol}>
            <Select
              placeholder="Selecciona tipo de rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="usuario">Usuario</option>
              <option value="administrador">Administrador</option>
            </Select>
            {errors.rol && <FormErrorMessage>{errors.rol}</FormErrorMessage>}
          </FormControl>
          {errors.apiError && <Text color="red.500">{errors.apiError}</Text>}
          <AltaButton onClick={handleAltaClick} />
          <CancelarButton onClick={handleCancelarClick} />
        </VStack>
      </Box>
      <Modal isOpen={isConfirmationOpen} onClose={onConfirmationClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación de Alta</ModalHeader>
          <ModalBody>
            <Text>
              ¿Estás seguro/a de que quieres dar de alta este usuario?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onConfirmationClose}>
              Cancelar
            </Button>
            <Button colorScheme="purple" onClick={confirmAlta} ml={3}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isResultOpen} onClose={handleResultClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultado</ModalHeader>
          <ModalBody>
            <Text>{resultMessage}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={handleResultClose}>
              Volver al Inicio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AltaEmpleado;
