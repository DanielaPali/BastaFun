import React from "react";
import "../App.css";

function Compon1() {
  return (
    <table className="Tabla">
      <thead>Jugadores</thead>
      <tbody>
        <tr>
          <th>Hola</th>
        </tr>
        <tr>
          <th>Hola</th>
        </tr>
        <tr>
          <th>Hola</th>
        </tr>
      </tbody>
    </table>
  );
}
function Espera() {
  return (
    <div className="Contenido">
      <h1>Sala de espera</h1>
      <br></br>
      <h2>Amigos conectados</h2>
      <Compon1 />
    </div>
  );
}
export default Espera;
