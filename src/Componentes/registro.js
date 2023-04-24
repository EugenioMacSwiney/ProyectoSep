import React from "react";
import "../Estilos/formulario-estilos.css";

function Registro() {
  return (
    <form>
    <label for="fname">Nombre</label>
    <input type="text" placeholder="Tu nombre.."/>

    <label for="lname">Apellido</label>
    <input type="text"  placeholder="Tu apellido.."/>
  

    <label for="lname">Constraseña</label>
    <input type="password"  placeholder="Tu contraseña.."/>

    <label for="lname">Confirmación constraseña</label>
    <input type="password"placeholder="Confirma la contraseña."/>

    <input type="submit" value="Registrarse"/>
  </form>
  );
}

export default Registro;