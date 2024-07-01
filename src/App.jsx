import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './screens/Login';
import Home from './screens/Home';
import RegistrarUsuario from './screens/RegistrarUsuario';
import ContraseñaOlvidada from './screens/ContraseñaOlvidada';
import EmailRecuperacionEnviado from './screens/EmailRecuperacionEnviado';
import AltaEmpleado from './screens/AltaEmpleado';
import ModificarEmpleado from './screens/ModificarEmpleados';
import Reservas from './screens/Reservas';
import Reportes from './screens/Reportes';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
            <Route
              path="/contraseña-olvidada"
              element={<ContraseñaOlvidada />}
            />
            <Route
              path="/email-recuperacion"
              element={<EmailRecuperacionEnviado />}
            />
            <Route path="/alta-empleado" element={<AltaEmpleado />} />
            <Route path="/modificar-empleado" element={<ModificarEmpleado />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
