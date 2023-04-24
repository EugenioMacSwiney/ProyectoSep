import React from "react";
import "../Estilos/formulario-estilos.css";

function InicioSesion() {
  return (
    <form>
    <label for="fname">Nombre</label>
    <input type="text" placeholder="Tu nombre.."/>

    <label for="lname">Apellido</label>
    <input type="text"  placeholder="Tu apellido.."/>
  

    <label for="lname">Constraseña</label>
    <input type="password"  placeholder="Tu contraseña.."/>

    <input type="submit" value="Iniciar"/>
  </form>
  );
}

export default InicioSesion;