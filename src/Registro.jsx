import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';

const Registro = () => {
    return (
        <div className="registro-container">
            <h2>Registro</h2>
            <form>
                <label htmlFor="first_name">Nombre:</label>
                <input type="text" id="first_name" name="first_name" />

                <label htmlFor="last_name">Apellido:</label>
                <input type="text" id="last_name" name="last_name" />

                <label htmlFor="nro_documento">Número de Documento:</label>
                <input type="text" id="nro_documento" name="nro_documento" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" />

                <label htmlFor="nro_telefono">Número de Teléfono:</label>
                <input type="text" id="nro_telefono" name="nro_telefono" />

                <button type="submit">Registrarse</button>
                <div className="login-link">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </div>
            </form>
        </div>
    );
}

export default Registro;
