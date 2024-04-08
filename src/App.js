import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotonesInicio from './Componentes/BotonesInicio.js';
import Proposito from './Componentes/Proposito.js';
import InicioSesion from './Componentes/InicioSesion.js';
import Registro from './Componentes/Registro.js';
import OlvidoContrasena from './Componentes/OlvidoContrasena.js';
import ContrasenaFavorita from './Componentes/ContrasenaFavorita.js';
import GeneradorContrasena from './Componentes/GeneradorContrasenas.js';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PaginaPrincipal/>} />
          <Route path="/inicio_sesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/olvido_contrasena" element={<OlvidoContrasena/>}/>
          <Route path="/contrasena_favorita" element={<ContrasenaFavorita/>}/>
          <Route path="/calcular" element={<GeneradorContrasena/>}/>
        </Routes>
      </div>
    </Router>
  );
};


const PaginaPrincipal = () => {
  return (
    <>
      <BotonesInicio />
      <Proposito />
    </>
  );
};
export default App;
