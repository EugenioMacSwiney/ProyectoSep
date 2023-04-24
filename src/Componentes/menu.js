import React from 'react';
import "../Estilos/menu-estilos.css";
import { Outlet, Link } from 'react-router-dom';

function Menu() {
    return (
        <>
        <nav>
            <ul>
            <li><a><Link to="/">Inicio</Link></a></li>
            <li><a><Link to="/login">Login</Link></a></li>
            <li><a><Link to="/signin">Signin</Link></a></li>
            </ul>
        </nav> 
        <Outlet/>
        </>
    );
}

export default Menu;