import React from 'react';
import Encabezado from '../Componentes/encabezado';
import Footer from '../Componentes/footer';
import Menu from '../Componentes/menu';
import Registro from '../Componentes/registro';


function Signin() {
  return (
    <div>
        <Menu />
        <h2>Registro de usuarios</h2>
        <Encabezado />
        <Registro />
        <Footer />
        
    </div>
  );
}

export default Signin;
