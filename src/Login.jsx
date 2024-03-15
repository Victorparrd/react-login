import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://vetesoft.com.py/veteadmin/api/auth/login/', formData);
            console.log(response.data);
            window.location.href = '/';
        } catch (error) {
            console.error(error);
            window.alert('Error al iniciar sesión. Por favor, intenta nuevamente.');
        }
    };

    
    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

                <button type="submit">Entrar</button>
            </form>
            <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
        </div>
    );
}

export default Login;
