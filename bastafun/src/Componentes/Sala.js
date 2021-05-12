import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";


function Sala (){
    const history = useHistory();
    function Cambiarpag(){
        history.push("/Espera");
    }
    return (
        <div className="Contenido">
        <form>
          <label for="Nombre">Ingresa el Nombre</label><br></br>
          <input className="inputB" id="Nombre" type="text" name="Nombre" /><br></br>
          <label for="Nombre">Ingresa el Codigo</label><br></br>
          <input className="inputB" id="Codigo" type="text" name="Codigo" /><br></br>
        </form>
        <br></br>
       <button className="bastaButton" 
       onClick={Cambiarpag}><p>Unirse</p></button><br></br>
        <button className="bastaButton"><p>Crear</p></button><br></br>
        <h2> HOLA </h2>
      </div>
    );
}
export default Sala;