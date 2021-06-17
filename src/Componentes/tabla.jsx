export const Tabla = (props) => {
  const {
    lista: { nombre, apellido, id },
  } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr key={id}>
          <td>{nombre}</td>
          <td>{apellido}</td>
          <td>
            <button className="eliminar">Eliminar</button>
            <button className="editar">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
