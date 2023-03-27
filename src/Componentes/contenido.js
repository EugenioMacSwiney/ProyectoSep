import React from 'react';
import "../Estilos/contenido-estilos.css";

function Contenido() {
    return (
        <div className="row">
            <div className="column-1"><h3>Iniciar sesión</h3></div>
            <div className="column-2">
                <h2>Bienvenido</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></div>
            <div className="column-3">
                <h3>¿Necesitas ayuda?</h3>
                <ul>
                    <li>Registro</li>
                    <li>Contacto</li>
                    <li>Información</li>
                </ul>
            </div>
        </div>
    );
}

export default Contenido;