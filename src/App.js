import React from 'react';
import Home from './components/Home';
import Users from './components/Users';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
