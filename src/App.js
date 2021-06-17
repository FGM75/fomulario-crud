import React from "react";
import tabla from "./Componentes/tabla";
function App() {
  return (
    <div className="container-principal fluid">
      <h1>Listado Crud</h1>
      <div className="row">
        <div className="columna-añadir col">
          <h2>Añadir</h2>
        </div>
        <div className="columna-estado col">
          <h2>Tabla estado</h2>
          <tabla />
        </div>
      </div>
    </div>
  );
}

export default App;
