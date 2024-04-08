
import React from 'react';
import '../Css/InicioSesion.css'; 
import { Link } from 'react-router-dom';

const FormularioIniciarSesion = () => {
  return (
    <div className="contenedor-2">
        <form id="formulario-iniciar-sesion" className="content-form">
            <div className="form-group">
                <input type="email" className="form-control" id="correo" name="correo" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
            </div>

            <div className="form-group">
                <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" autoComplete="off" required />
            </div>

            <div className="form-group">
                <Link to="/olvido_contrasena" className="olvido-contraseña">¿Olvidaste tu contraseña?</Link>
            </div>

            <Link to ='/contrasena_favorita' type="submit" className="btn">Iniciar Sesión</Link>
        </form>
    </div>
  );
};

export default FormularioIniciarSesion;
 