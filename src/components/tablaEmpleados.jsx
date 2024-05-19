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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre Completo</Th>
            <Th>Email</Th>
            <Th>Password</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id}>
              <Td>
                <Input
                  value={employee.name}
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'name')}
                />
              </Td>
              <Td>
                <Input
                  value={employee.email}
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'email')}
                />
              </Td>
              <Td>
                <Input
                  value={employee.password}
                  type="password"
                  isDisabled={editingId !== employee.id}
                  onChange={(e) => handleChange(e, employee.id, 'password')}
                />
              </Td>
              <Td>
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
                  ml={2}
                >
                  Eliminar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
