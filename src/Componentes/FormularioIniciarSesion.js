import React, { useState, useContext } from 'react';
import '../Css/InicioSesion.css';
import UserContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const FormularioIniciarSesion = () => {
    const [usuario, setDatosUsuario] = useState({
        correo: '',
        contrasena: '',
    });
    const { setUser } = useContext(UserContext);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = e => {
        setDatosUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://secureapp.azurewebsites.net/usuario/iniciarSesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    console.log("Inicio de sesión exitoso");
                    setUser(data);
                    console.log(data)
                    navigate("/contrasena_favorita");
                } else {
                    setError("El correo o la contraseña están incorrectos");
                }
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
            });
    };


    return (
        <div className="contenedor-2">
            <form id="formulario-iniciar-sesion" className="content-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control" id="correo" name="correo" aria-describedby="emailHelp" placeholder="Correo electrónico" required onChange={handleChange} />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" autoComplete="off" required onChange={handleChange} />
                </div>

                {error && <p>{error}</p>}

                <button type="submit" className="btn">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default FormularioIniciarSesion;