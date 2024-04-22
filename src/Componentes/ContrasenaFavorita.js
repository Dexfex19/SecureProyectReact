import React, { useState, useEffect, useContext } from 'react';
import '../Css/ContrasenaFavorita.css';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/AuthContext';

const ContrasenaFavorita = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  console.log(user);
  // Simulación de contraseñas guardadas en el estado
  const [contrasenas, setContrasenas] = useState([]);

  useEffect(() => {
    // Aquí deberías hacer una llamada a tu base de datos para obtener las contraseñas del usuario actual
    // Supongamos que las contraseñas se obtienen correctamente y se almacenan en un array llamado contrasenasGuardadas
    const contrasenasGuardadas = [
      { descripcion: 'Correo electrónico', contrasena: 'ejemplo123' },
      { descripcion: 'Cuenta bancaria', contrasena: 'segura456' },
      // Agrega más contraseñas según lo necesites
    ];
    setContrasenas(contrasenasGuardadas);
  }, []); // La dependencia vacía significa que este efecto se ejecuta solo una vez al montar el componente

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
                <td>{contrasena.contrasena}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContrasenaFavorita;


