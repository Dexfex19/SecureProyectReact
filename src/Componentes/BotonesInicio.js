
import React from 'react';
import '../Css/Inicio.css'
import { Link } from 'react-router-dom';

const BotonesInicio = () => {
  return (
    <div className="contenedor">
      <div className="img">
        <img src="/Imagenes/Logo.png" alt="Logo" />
      </div>
      <div className="bloque-botones">
        <Link to="/inicio_sesion" id="InicioSesion" className="button tipo-font">Iniciar sesión</Link>
        <Link to="/registro" id="Registro" className="button tipo-font">Registrarse</Link>
      </div>
    </div>
  );
};

export default BotonesInicio;
