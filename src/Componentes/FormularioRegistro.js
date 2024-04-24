import React, { useState } from 'react';
import '../Css/Registro.css'


const FormularioRegistro = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    nombreUsuario: '',
    contrasena: '',
    contrasenasGuadadas: null,
  });


  const handleChange = e => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar la recarga de la página
    fetch("secureapp.azurewebsites.net/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Usuario registrado con éxito");
          window.location.href = "/inicio_sesion";
        } else {
          console.error("Error al registrar usuario:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al registrar usuario:", error);
      });
  };


  return (
    <div className="contenedor-2">
      <form id="formulario" className="content-form" onSubmit={handleSubmit}>
        <h1 className="title-form">Registro Usuario</h1>
        <div className="col-6">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" required onChange={handleChange} />
            <span id="error-nombre"></span>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Apellido" id="apellido" name="apellido" required onChange={handleChange} />
            <span id="error-apellido"></span>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="correo" name="correo" aria-describedby="emailHelp" placeholder="Correo electrónico" required onChange={handleChange} />
            <span id="error-correo"></span>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nombre de Usuario" id="nombreUsuario" name="nombreUsuario" required onChange={handleChange} />
            <span id="error-nombreUsuario"></span>
          </div>

          <div className="form-group">
            <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" autoComplete="off" required onChange={handleChange} />
            <span id="error-contrasena"></span>
          </div>
        </div>
        <button id="formulario-registrar" type="submit" className="btn">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
