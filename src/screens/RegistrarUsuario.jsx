import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  FormControl,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import EmailControlledInput from '../components/emailControlledInput';
import PasswordControlledInput from '../components/passwordControlledInput';
import SecondPasswordControlledInput from '../components/secondPasswordControlledInput';
import NombreCompletoControlledInput from '../components/nombreCompletoControlledInput';
import AreaControlledInput from '../components/areaControlledInput';
import RegistrarseButton from '../components/registrarseButton';
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
import registerService from '../services/RegisterService/RegisterService.js';
import loginService from '../services/LoginService/LoginService.js';

const RegistrarUsuario = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    fullName: '',
    email: '',
    userPassword: '',
    confirmPassword: '',
    role: '',
  });
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
  const {
    isOpen: isSuccessOpen,
    onOpen: onSuccessOpen,
    onClose: onSuccessClose,
  } = useDisclosure();
  const [resultMessage, setResultMessage] = useState('');

  const handleChange = (event) => {
    setRegister((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!register.email) {
      newErrors.email = 'El campo no puede estar vacío.';
    } else if (
      !/^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(register.email)
    ) {
      newErrors.email = 'El email no es válido.';
    }

    if (!register.userPassword) {
      newErrors.userPassword = 'El campo contraseña no puede estar vacío.';
    }

    if (register.userPassword !== register.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    if (!register.fullName) {
      newErrors.fullName = 'El campo no puede estar vacío.';
    }

    if (!register.role) {
      newErrors.role = 'El campo no puede estar vacío.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onConfirmationOpen();
    }
  };

  const confirmRegistration = async () => {
    const registerResponse = await registerService(register);
    if (registerResponse.success) {
      const loginResponse = await loginService({
        email: register.email,
        userPassword: register.userPassword,
      });
      if (loginResponse.success) {
        setResultMessage(
          'Registro exitoso. Redirigiendo a la página principal...'
        );
        onSuccessOpen();
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        setResultMessage('Error de inicio de sesión: ' + loginResponse.message);
        onResultOpen();
      }
    } else {
      setResultMessage('Error de registro: ' + registerResponse.message);
      onResultOpen();
    }
    onConfirmationClose();
  };

  const handleCancelarClick = () => {
    navigate('/login');
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
          <FormControl isInvalid={errors.fullName}>
            <NombreCompletoControlledInput
              name="fullName"
              value={register.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <FormErrorMessage>{errors.fullName}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <EmailControlledInput
              name="email"
              value={register.email}
              onChange={handleChange}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.userPassword}>
            <PasswordControlledInput
              name="userPassword"
              value={register.userPassword}
              onChange={handleChange}
            />
            {errors.userPassword && (
              <FormErrorMessage>{errors.userPassword}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword}>
            <SecondPasswordControlledInput
              name="confirmPassword"
              value={register.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.role}>
            <AreaControlledInput
              name="role"
              value={register.role}
              onChange={handleChange}
            />
            {errors.role && <FormErrorMessage>{errors.role}</FormErrorMessage>}
          </FormControl>
          <RegistrarseButton onClick={handleSubmit} />
          <CancelarButton onClick={handleCancelarClick} />
        </VStack>
      </Box>
      <Modal isOpen={isConfirmationOpen} onClose={onConfirmationClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación de Registro</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro/a de que quieres registrar este usuario?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onConfirmationClose}>
              Cancelar
            </Button>
            <Button colorScheme="purple" onClick={confirmRegistration} ml={3}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isResultOpen} onClose={onResultClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultado</ModalHeader>
          <ModalBody>
            <Text>{resultMessage}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={onResultClose}>
              Volver al Inicio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isSuccessOpen} onClose={onSuccessClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro Exitoso</ModalHeader>
          <ModalBody>
            <Text>
              El usuario ha sido registrado con éxito. Redirigiendo a la página
              principal...
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RegistrarUsuario;
