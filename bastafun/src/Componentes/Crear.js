import React, { useEffect } from "react";
import "../App.css";
import "../Estilos/Tablas.css";
import firebase from "../firebase";
import { useList } from "react-firebase-hooks/database";

function Compon() {
  return <table></table>;
}

function Crear() {
  const db = firebase.ref("/partidas");
  const [partidas, loading, error] = useList(db);

  useEffect(() => {
    console.log(partidas);
  });
  function AgregarPartida() {
    db.push("c");
  }
  return (
    <div className="Contenido">
      <h1>Partida Creada</h1>
      <br></br>
      <h2>Amigos conectados</h2>
      <button className="bastaButton" onClick={AgregarPartida}>
        <p>P</p>
      </button>
      <Compon />
    </div>
  );
}
export default Crear;
