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

const initialEmployees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: '123456' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'abcdef' },
  // Añade más empleados según sea necesario
];

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    fetch(`http://172.20.97.65:8080/api/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        if (response.ok) {
            // Eliminar el empleado de la lista local
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
    setEmployees(
      employees.filter((employee) => employee.userId !== employeeToDelete)
    );
    console.log(`Eliminando empleado con id ${employeeToDelete}`);
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

  const handleSave = () => {
    const employee = employees.find(emp => emp.userId === editingId);
    fetch(`http://172.20.97.65:8080/api/user/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setEditingId(null);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch('http://172.20.97.65:8080/api/user')
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data && data.data.success && data.data.data) {
          setEmployees(data.data.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
                <Input
                  value={employee.fullName}
                  isDisabled={editingId !== employee.userId}
                  onChange={(e) => handleChange(e, employee.userId, 'fullName')}
                />
              </Td>
              <Td textAlign="right">
                <Input
                  value={employee.email}
                  isDisabled={editingId !== employee.userId}
                  onChange={(e) => handleChange(e, employee.userId, 'email')}
                />
              </Td>
              <Td textAlign="right">
                <Input
                  value={employee.userPassword}
                  type="password"
                  isDisabled={editingId !== employee.userId}
                  onChange={(e) => handleChange(e, employee.userId, 'userPassword')}
                />
              </Td>
              <Td textAlign="right">
                <Flex justifyContent="flex-end">
                  {editingId === employee.userId ? (
                    <Button colorScheme="blue" onClick={handleSave}>
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
                    onClick={() => handleDelete(employee.userId)}
                    ml={6}
                  >
                    Eliminar
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirmación</ModalHeader>
            <ModalBody>
              <Text>
                ¿Estás seguro/a de que quieres eliminar este empleado?
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={confirmDelete}>
                Aceptar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
