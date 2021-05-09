import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <h1>BastaFun</h1>
      </div>
      <div className="Contenido">
        <form>
          <label for="Nombre">Ingresa el Nombre</label><br></br>
          <input className="inputB" id="Nombre" type="text" name="Nombre" /><br></br>
          <label for="Nombre">Ingresa el Codigo</label><br></br>
          <input className="inputB" id="Codigo" type="text" name="Codigo" /><br></br>
        </form>
        <br></br>
        <button className="bastaButton"><p>Unirte</p></button><br></br>
        <button className="bastaButton"><p>Crear</p></button><br></br>
      </div>
    </div>
  );
}

export default App;
