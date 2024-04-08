
import React from 'react';
import '../Css/Registro.css'
import { Link } from 'react-router-dom';

const FormularioRegistro = () => {
  return (
    <div className="contenedor-2">
        <form id="formulario" className="content-form">
            <h1 className="title-form">Registro Usuario</h1>
            <div className="col-6">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" required />
                    <span id="error-nombre"></span>
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" id="correo" name="correo" aria-describedby="emailHelp" placeholder="Correo electrónico" required />
                    <span id="error-correo"></span>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" autoComplete="off" required />
                    <span id="error-contrasena"></span>
                </div>
            </div>
            <Link to='/inicio_sesion' id="formulario-registrar" type="submit" className="btn">Registrarse</Link>
        </form>
    </div>
  );
};

export default FormularioRegistro;
