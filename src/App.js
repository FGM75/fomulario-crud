import React, { useState } from "react";
import { Tabla } from "./Componentes/Tabla";
function App() {
  const ListaNombres = [
    { id: 1, nombre: "Elsa", apellido: "Capunta" },
    { id: 2, nombre: "Aylen", apellido: "Tejas" },
    { id: 3, nombre: "Elena", apellido: "Nito Del Bosque" },
    { id: 4, nombre: "Helen", apellido: "Chufe" },
    { id: 5, nombre: "Elton", apellido: "Tito" },
    { id: 6, nombre: "Lola", apellido: "Mento" },
  ];
  const [Lista, setListado] = useState(ListaNombres);
  return (
    <div className="container-principal fluid">
      <h1>Listado Crud</h1>
      <div className="row">
        <div className="columna-añadir col">
          <h2>Añadir</h2>
        </div>
        <div className="columna-estado col">
          <h2>Tabla estado</h2>
          {ListaNombres.map((lista) => (
            <Tabla lista={lista} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
