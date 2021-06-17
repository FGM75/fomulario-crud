import React from "react";
const tabla = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {props.listaNombres.map((Lista) => (
          <tr key={Lista.id}>
            <td>{Lista.nombre}</td>
            <td>{Lista.apellido}</td>
            <td>
              <button className="eliminar">Eliminar</button>
              <button className="añadir">Añadir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default tabla;
