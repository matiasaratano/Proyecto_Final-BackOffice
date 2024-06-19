import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
  Flex,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSaveOpen,
    onOpen: onSaveOpen,
    onClose: onSaveClose,
  } = useDisclosure();
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [errors, setErrors] = useState({});
  const [employeeToSave, setEmployeeToSave] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const validateFields = (employee) => {
    const newErrors = {};
    if (!employee.fullName)
      newErrors.fullName = 'El campo no puede estar vacío';
    if (!employee.email) {
      newErrors.email = 'El campo no puede estar vacío';
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!employee.userPassword)
      newErrors.userPassword = 'El campo no puede estar vacío';
    return newErrors;
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setEmployees(employees.filter((employee) => employee.userId !== id));
          console.log(`Empleado con id ${id} eliminado`);
        } else {
          console.error('Error al eliminar empleado');
        }
      })
      .catch((error) => {
        console.error('Error al eliminar empleado:', error);
      });
  };

  const confirmDelete = () => {
    if (employeeToDelete) {
      handleDelete(employeeToDelete);
      setEmployeeToDelete(null);
    }
    onClose();
  };

  const handleChange = (e, id, field) => {
    const newEmployees = employees.map((employee) => {
      if (employee.userId === id) {
        return { ...employee, [field]: e.target.value };
      }
      return employee;
    });
    setEmployees(newEmployees);
  };

  const handleSaveClick = (employee) => {
    const newErrors = validateFields(employee);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setEmployeeToSave(employee);
      onSaveOpen();
    }
  };

  const confirmSave = () => {
    if (employeeToSave) {
      fetch(`http://localhost:8080/api/user/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeToSave),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setEditingId(null);
          setEmployeeToSave(null);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    onSaveClose();
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/user')
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data && data.data.success && data.data.data) {
          setEmployees(data.data.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const openDeleteModal = (id) => {
    setEmployeeToDelete(id);
    onOpen();
  };

  return (
    <TableContainer>
      <Table variant="simple" marginTop={10} bg="whiteAlpha.500">
        <Thead>
          <Tr>
            <Th textAlign="left">Nombre Completo</Th>
            <Th textAlign="left">Email</Th>
            <Th textAlign="left">Password</Th>
            <Th textAlign="center">Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.userId}>
              <Td textAlign="right">
                <FormControl
                  isInvalid={errors.fullName && editingId === employee.userId}
                >
                  <Input
                    value={employee.fullName}
                    isDisabled={editingId !== employee.userId}
                    onChange={(e) =>
                      handleChange(e, employee.userId, 'fullName')
                    }
                  />
                  {errors.fullName && editingId === employee.userId && (
                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                  )}
                </FormControl>
              </Td>
              <Td textAlign="right">
                <FormControl
                  isInvalid={errors.email && editingId === employee.userId}
                >
                  <Input
                    value={employee.email}
                    isDisabled={editingId !== employee.userId}
                    onChange={(e) => handleChange(e, employee.userId, 'email')}
                  />
                  {errors.email && editingId === employee.userId && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>
              </Td>
              <Td textAlign="right">
                <FormControl
                  isInvalid={
                    errors.userPassword && editingId === employee.userId
                  }
                >
                  <Input
                    value={employee.userPassword}
                    type="password"
                    isDisabled={editingId !== employee.userId}
                    onChange={(e) =>
                      handleChange(e, employee.userId, 'userPassword')
                    }
                  />
                  {errors.userPassword && editingId === employee.userId && (
                    <FormErrorMessage>{errors.userPassword}</FormErrorMessage>
                  )}
                </FormControl>
              </Td>
              <Td textAlign="right">
                <Flex justifyContent="flex-end">
                  {editingId === employee.userId ? (
                    <Button
                      colorScheme="blue"
                      onClick={() => handleSaveClick(employee)}
                    >
                      Guardar
                    </Button>
                  ) : (
                    <Button
                      bg="#6a4fa7"
                      color={'white'}
                      onClick={() => handleEdit(employee.userId)}
                    >
                      Modificar
                    </Button>
                  )}
                  <Button
                    colorScheme="red"
                    onClick={() => openDeleteModal(employee.userId)}
                    ml={6}
                  >
                    Eliminar
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro/a de que quieres eliminar este empleado?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={confirmDelete} ml={3}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isSaveOpen} onClose={onSaveClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmación de Guardado</ModalHeader>
          <ModalBody>
            <Text>¿Estás seguro/a de que quieres guardar los cambios?</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onSaveClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={confirmSave} ml={3}>
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </TableContainer>
  );
};

export default EmployeeTable;
