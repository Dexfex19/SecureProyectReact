import React, { useState } from 'react';
import '../Css/InicioSesion.css';
import { Link } from 'react-router-dom';

const FormularioIniciarSesion = () => {
    const [usuario, setUsuario] = useState({
        correo: '',
        contrasena: '',
    });

    const [error, setError] = useState(null);

    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/usuario/iniciarSesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Inicio de sesión exitoso");
                    window.location.href = "/contrasena_favorita";
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

                <div className="form-group">
                    <Link to="/olvido_contrasena" className="olvido-contraseña">¿Olvidaste tu contraseña?</Link>
                </div>

                {error && <p>{error}</p>}

                <button type="submit" className="btn">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default FormularioIniciarSesion;