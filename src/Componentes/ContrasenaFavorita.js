import React, { useState, useEffect, useContext } from 'react';
import '../Css/ContrasenaFavorita.css';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/AuthContext';

const ContrasenaFavorita = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [contrasenas, setContrasenas] = useState([]);

  useEffect(() => {
    // Hacer una llamada a tu base de datos para obtener las contraseñas del usuario actual
    fetch(`http://localhost:8080/contrasena/usuario/${user.id}`)
      .then(response => response.json())
      .then(data => setContrasenas(data))
      .catch(error => console.error('Hubo un error al obtener las contraseñas: ', error));
  }, [user.id]); // Dependencia en el idUsuario para que se actualice cuando cambie

  const handleBack = () => {
    navigate("/calcular");
  };

  return (
    <div>
      <Logo />
      <div className="nombre-usuario">
        <p>Bienvenido: {user?.nombreUsuario}</p>
      </div>
      <div className="content-form">
        <label htmlFor="contrasena-favorita" className="title-form">Generar nueva contraseña </label>
        <button onClick={handleBack} className="btn">Generar</button>
      </div>
      <div className="contenedor-2">
        <table className="contrasenas-table">
          <thead id='titulo1'>
            <tr>
              <th>
                Lista de mis contraseñas
              </th>
            </tr>
          </thead>
          <thead id='titulo2'>
            <tr>
              <th>Descripción</th>
              <th>Contraseña</th>
            </tr>
          </thead>
          <tbody>
            {contrasenas.map((contrasena, index) => (
              <tr key={index}>
                <td>{contrasena.descripcion}</td>
                <td>{contrasena.contenido}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContrasenaFavorita;


