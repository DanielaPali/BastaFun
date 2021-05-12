import React from "react";
import "../App.css";

function Compon1 (){
    return(
<h5>Lo que sea</h5>
    );
}
function Espera (){
    return (
        <div className="Contenido">
            <h1>Holi</h1>
            <br></br>
            <h1>Como estas</h1>
            <Compon1/>
            </div>
    );
}
export default Espera;