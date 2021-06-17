import React from "react";
const tabla = () => {
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
        <tr>
          <td>Nombre</td>
          <td>Usuario</td>
          <td>
            <button className="eliminar">Eliminar</button>
            <button className="añadir">Añadir</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default tabla;
