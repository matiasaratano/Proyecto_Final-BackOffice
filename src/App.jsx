import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './screens/Login';
import Home from './screens/Home';
import RegistrarUsuario from './screens/RegistrarUsuario';
import ContraseñaOlvidada from './screens/ContraseñaOlvidada';
import EmailRecuperacionEnviado from './screens/EmailRecuperacionEnviado';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rutas para las diferentes pantallas */}
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
            <Route path="/contraseña-olvidada" element={<ContraseñaOlvidada />} />
            <Route path="/email-recuperacion" element={<EmailRecuperacionEnviado />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;