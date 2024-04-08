import React, { useState, useEffect } from 'react';
import '../Css/ContrasenaFavorita.css'; 
import Logo from './Logo';
import { Link } from 'react-router-dom';

const ContrasenaFavorita = () => {
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

  return (
    <div>
      <Logo />
      <div class="content-form">
            <label for="contrasena-favorita" class="title-form">Generar nueva contraseña </label>
            <Link to='/calcular' type="submit" class="btn" id="contrasena-favorita"> Generar</Link>
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

