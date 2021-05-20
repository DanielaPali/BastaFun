import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Bar from "./Componentes/Barra";
import Sala from "./Componentes/Sala";
import Espera from "./Componentes/Espera";
import Crear from "./Componentes/Crear";

function App() {
  return (
    <FirebaseDatabaseProvider>
      <div className="App">
        <Bar />
        <Switch>
          <Route exact path="/" component={Sala} />
          <Route path="/Espera" component={Espera} />
          <Route path="/Crear" component={Crear} />
        </Switch>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
