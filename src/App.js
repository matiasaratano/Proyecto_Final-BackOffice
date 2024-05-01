import React from 'react';
import Home from './components/Home';
import Users from './components/Users';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registro from './screens/Register';
import RecuperarContraseña from './screens/RecuperarContraseña';
import EmailSent from './screens/EmailSent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route path="/email-sent" element={<EmailSent />} />
      </Routes>
    </Router>
  );
}

export default App;
