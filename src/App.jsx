import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Login from './Login';
import Registro from './Registro';
import './App.css'; // Importa el CSS de App

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/registro" className="nav-link">Registro</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;