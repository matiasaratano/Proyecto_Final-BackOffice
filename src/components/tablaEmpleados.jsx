import React, { useState } from 'react';
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

const initialEmployees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: '123456' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'abcdef' },
  // Añade más empleados según sea necesario
];

const EmployeeTable = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const handleChange = (e, id, field) => {
    const newEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, [field]: e.target.value };
      }
      return employee;
    });
    setEmployees(newEmployees);
  };

  const handleSave = () => {
    setEditingId(null);
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
            <Tr key={employee.id}>
              <Td textAlign="right">
                <Input
                  value={employee.name}
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'name')}
                />
              </Td>
              <Td textAlign="right">
                <Input
                  value={employee.email}
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'email')}
                />
              </Td>
              <Td textAlign="right">
                <Input
                  value={employee.password}
                  type="password"
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'password')}
                />
              </Td>
              <Td textAlign="right">
                <Flex justifyContent="flex-end">
                  {editingId === employee.id ? (
                    <Button colorScheme="blue" onClick={handleSave}>
                      Guardar
                    </Button>
                  ) : (
                    <Button
                      bg="#6a4fa7"
                      color={'white'}
                      onClick={() => handleEdit(employee.id)}
                    >
                      Modificar
                    </Button>
                  )}
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(employee.id)}
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
    </TableContainer>
  );
};

export default EmployeeTable;
