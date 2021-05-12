import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bar from './Componentes/Barra';
import Sala from './Componentes/Sala';
import Espera from './Componentes/Espera';

function App() {
  return (
    <div className="App">
     <Bar/>
     <Switch>
     <Route exact path="/" component={Sala} />
     <Route path="/Espera" component={Espera} />

     </Switch>
    </div>
  );
}

export default App;
