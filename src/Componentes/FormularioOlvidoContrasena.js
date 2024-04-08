
import React from 'react';
import '../Css/OlvidoContrasena.css'; 
import { Link } from 'react-router-dom';

const FormularioOlvidoContrasena = () => {
  return (
    <div className="contenedor-olvido">
        <form id="formulario-olvido" className="content-form">
            <h1 className="title-form">Restablecer Contraseña</h1>
            <div className="form-group">
                <input type="password" className="form-control" id="nueva-contrasena" name="nueva-contrasena" placeholder="Nueva Contraseña" autoComplete="off" required />
            </div>

            <div className="form-group p-2">
                <input type="password" className="form-control" id="confirmar-contrasena" name="confirmar-contrasena" placeholder="Confirmar Contraseña" autoComplete="off" required />
            </div>

            <Link to='/inicio_sesion' id="formulario-restablecer" type="submit" className="btn">Restablecer Contraseña</Link>
        </form>
    </div>
  );
};

export default FormularioOlvidoContrasena;
