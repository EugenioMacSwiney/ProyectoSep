import React from 'react';
import Encabezado from '../Componentes/encabezado';
import Contenido from '../Componentes/contenido';
import Footer from '../Componentes/footer';
import Menu from '../Componentes/menu';


function Inicio() {
  return (
    <div>
        <Menu />
        <Encabezado />
        <Contenido />
        <Footer />
        
    </div>
  );
}

export default Inicio;
