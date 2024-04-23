import React, { useContext, useState } from 'react';
import '../Css/Calcular.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/AuthContext';

const FormularioGeneradorContrasenas = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);


    const [descripcion, setDescripcion] = useState('');
    const [contrasenaGenerada, setContrasenaGenerada] = useState(null);
    const [incluirMayusculas, setIncluirMayusculas] = useState(false);
    const [incluirMinusculas, setIncluirMinusculas] = useState(false);
    const [incluirNumeros, setIncluirNumeros] = useState(false);
    const [incluirSimbolos, setIncluirSimbolos] = useState(false);
    const [longitud, setLongitud] = useState(0);

    const handleBack = (e) => {
        e.preventDefault(); // Evitar la recarga de la página
        navigate("/contrasena_favorita");
    };

    const handleGenerar = () => {
        fetch("http://localhost:8080/contrasena/generar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuario: user.id,
                descripcion: descripcion,
                incluirMayusculas: incluirMayusculas,
                incluirMinusculas: incluirMinusculas,
                incluirNumeros: incluirNumeros,
                incluirSimbolos: incluirSimbolos,
                longitud: longitud
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setContrasenaGenerada(data.contrasena);
            })
            .catch((error) => {
                console.error("Error al generar contraseña:", error);
            });
    };

    const handleGuardar = (e) => {
        e.preventDefault(); // Evitar la recarga de la página
        fetch("http://localhost:8080/contrasena", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idUsuario: user.id,
                descripcion: descripcion,
                contenido: contrasenaGenerada
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Contraseña guardada exitosamente");
                navigate("/contrasena_favorita");
            })
            .catch((error) => {
                console.error("Error al guardar contraseña:", error);
            });
    };

    return (
        <div className="contenedor-generador">
            <form id="formulario-generador" className="content-form" onSubmit={handleGuardar}>
                <h1 className="title-form">Generador de Contraseñas</h1>
                <div className="form-group p-2">
                    <label htmlFor="contrasena-generada">Descripción</label>
                    <input type="text" className="form-control" id="Descripcion-Contrsena" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div className="form-group p-2">
                    <label htmlFor="contrasena-generada">Contraseña Generada</label>
                    <input type="text" className="form-control" id="contraseña-generada" value={contrasenaGenerada || ''} readOnly />
                </div>

                <div className="form-group p-2">
                    <label>Opciones:</label>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-mayusculas" onChange={(e) => setIncluirMayusculas(e.target.checked)} />
                        <label htmlFor="opcion-mayusculas">Mayúsculas</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-minusculas" onChange={(e) => setIncluirMinusculas(e.target.checked)} />
                        <label htmlFor="opcion-minusculas">Minúsculas</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-numeros" onChange={(e) => setIncluirNumeros(e.target.checked)} />
                        <label htmlFor="opcion-numeros">Números</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="opcion-especiales" onChange={(e) => setIncluirSimbolos(e.target.checked)} />
                        <label htmlFor="opcion-especiales">Caracteres Especiales</label>
                    </div>
                </div>
                <div className="form-group p-2">
                    <label htmlFor="longitud-contrasena">Longitud de Contraseña</label>
                    <input type="number" className="form-control" id="longitud-contrasena" name="longitud-contrasena" placeholder="Longitud" min="1" value={longitud} onChange={(e) => setLongitud(e.target.value)} required />
                </div>

                <div className="button-container">
                    <button onClick={handleGenerar} id="generar-contrasena" type="button" className="btn">Generar Contraseña</button>
                </div>
                <div className="button-container2">
                    <button id="guardar-contrasena" type="submit" className="btn">Guardar Contraseña</button>
                </div>
                <div className="button-container2">
                    <button onClick={handleBack} id="generar-contrasena" type="button" className="btn">Regresar a Contraseñas Guardadas</button>
                </div>
            </form>

        </div>
    );
};

export default FormularioGeneradorContrasenas;

