export const AñadirNombre = (props) => {
  return (
    <form>
      <label>Nombre</label>
      <input type="text" name="nombre" />
      <label>Apellido</label>
      <input type="text" name="apellido" />
      <button>Añadir</button>
    </form>
  );
};
