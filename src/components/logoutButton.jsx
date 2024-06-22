import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CerrarSesion = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token de autenticación
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión
    console.log("Sesión cerrada: ", localStorage.getItem("token"));
  };

  return (
    <Button colorScheme="red" variant="outline" w="100%" onClick={handleLogout}>
      Cerrar Sesion
    </Button>
  );
};

export default CerrarSesion;