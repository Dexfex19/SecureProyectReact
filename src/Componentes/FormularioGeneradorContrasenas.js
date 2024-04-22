
import React, { useContext } from 'react';
import '../Css/Calcular.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/AuthContext';

const FormularioGeneradorContrasenas = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/contrasena_favorita");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/contrasena_favorita");
    };

    return (
        <div className="contenedor-generador">
            <form id="formulario-generador" className="content-form" onSubmit={handleSubmit}>
                <h1 className="title-form">Generador de Contraseñas</h1>
                <div className="form-group p-2">
                    <label htmlFor="contrasena-generada">Descripción</label>
                    <input type="text" className="form-control" id="Descripcion-Contrsena" />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="contrasena-generada">Contraseña Generada</label>
                    <input type="text" className="form-control" id="contraseña-generada" readOnly />
                </div>

                <div className="form-group p-2">
                    <label>Opciones:</label>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-mayusculas" />
                        <label htmlFor="opcion-mayusculas">Mayúsculas</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-minusculas" />
                        <label htmlFor="opcion-minusculas">Minúsculas</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-numeros" />
                        <label htmlFor="opcion-numeros">Números</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-especiales" />
                        <label htmlFor="opcion-especiales">Caracteres Especiales</label>
                    </div>
                </div>
                <div className="form-group p-2">
                    <label htmlFor="longitud-contrasena">Longitud de Contraseña</label>
                    <input type="number" className="form-control" id="longitud-contrasena" name="longitud-contrasena" placeholder="Longitud" min="1" required />
                </div>

                <div className="button-container">
                    <button id="generar-contrasena" type="button" className="btn">Generar Contraseña</button>
                </div>
                <div className="button-container2">
                    <button id="guardar-contrasena" type="submit" className="btn">Guardar Contraseña</button>
                </div>
                <div className="button-container2">
                    <button onClick={handleBack} className="btn">Regresar a Contraseñas Guardadas</button>
                </div>
            </form>

        </div>
    );
};

export default FormularioGeneradorContrasenas;
