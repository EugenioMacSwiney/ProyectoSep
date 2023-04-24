import React from 'react';
import Menu from '../Componentes/menu';
import Encabezado from '../Componentes/encabezado';
import InicioSesion from '../Componentes/inicio-sesion';
import Footer from '../Componentes/footer';


function Login() {
  return (
    <div>
        <Menu/>
        <h2>Login</h2>
        <Encabezado />
        <InicioSesion />
        <Footer />
    </div>
  );
}

export default Login;
